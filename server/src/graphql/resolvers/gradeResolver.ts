import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const gradeResolver = {
    Query: {
        // Fetch a single Grade by ID
        getGrade: async (_: any, args: { id: number }) => {
            return prisma.grade.findUnique({
                where: { id: args.id },
                include: {
                    pupils: true,  // Include related pupils
                    subjects: true,  // Include related subjects
                },
            });
        },

        // Fetch all Grades
        getGrades: async () => {
            return prisma.grade.findMany({
                include: {
                    pupils: true,  // Include related pupils for each grade
                    subjects: true,  // Include related subjects for each grade
                },
            });
        },
    },

    Mutation: {
        // Create a new Grade
        createGrade: async (_: any, args: { name: string }) => {
            return prisma.grade.create({
                data: {
                    name: args.name,
                },
            });
        },

        // Update an existing Grade's information, including related subjects
        updateGrade: async (_: any, args: { id: number, name: string, subjectIds: number[] }) => {
            return prisma.grade.update({
                where: { id: args.id },
                data: {
                    name: args.name,
                    subjects: {
                        set: args.subjectIds.map((id) => ({ id })),  // Update subjects by setting new relations
                    },
                },
                include: {
                    pupils: true,  // Include updated pupils
                    subjects: true,  // Include updated subjects
                },
            });
        },

        // Delete a Grade by ID
        deleteGrade: async (_: any, args: { id: number }) => {
            await prisma.grade.delete({
                where: { id: args.id },
            });
            return true;  // Return true to indicate successful deletion
        },
    },

    Grade: {
        // Resolver for pupils field in Grade
        pupils: async (parent: { id: number }) => {
            return prisma.pupil.findMany({
                where: { gradeId: parent.id },  // Fetch pupils associated with this grade
            });
        },

        // Resolver for subjects field in Grade
        subjects: async (parent: { id: number }) => {
            return prisma.subject.findMany({
                where: { grades: { some: { id: parent.id } } },  // Fetch subjects associated with this grade
            });
        },
    },
};

export default gradeResolver;
