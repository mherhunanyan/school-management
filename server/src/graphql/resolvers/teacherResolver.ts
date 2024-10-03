import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const teacherResolver = {
    Query: {
        // Fetch a single Teacher by ID
        getTeacher: async (_: any, args: { id: number }) => {
            return prisma.teacher.findUnique({
                where: { id: args.id },
                include: {
                    subjects: true,  // Include related subjects
                },
            });
        },

        // Fetch all Teachers
        getTeachers: async () => {
            return prisma.teacher.findMany({
                include: {
                    subjects: true,  // Include related subjects for each teacher
                },
            });
        },
    },

    Mutation: {
        // Create a new Teacher
        createTeacher: async (_: any, args: { name: string }) => {
            return prisma.teacher.create({
                data: {
                    name: args.name,
                },
            });
        },

        // Update an existing Teacher's information
        updateTeacher: async (_: any, args: { id: number, name: string }) => {
            return prisma.teacher.update({
                where: { id: args.id },
                data: {
                    name: args.name,
                },
                include: {
                    subjects: true,  // Include updated subjects
                },
            });
        },

        // Delete a Teacher by ID
        deleteTeacher: async (_: any, args: { id: number }) => {
            await prisma.teacher.delete({
                where: { id: args.id },
            });
            return true;  // Return true to indicate successful deletion
        },
    },

    Teacher: {
        // Resolver for subjects field in Teacher
        subjects: async (parent: { id: number }) => {
            return prisma.subject.findMany({
                where: { teacherId: parent.id },  // Fetch subjects taught by this teacher
            });
        },
    },
};

export default teacherResolver;
