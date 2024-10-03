import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const subjectResolver = {
    Query: {
        // Fetch a single Subject by ID
        getSubject: async (_: any, args: { id: number }) => {
            return prisma.subject.findUnique({
                where: { id: args.id },
                include: {
                    grades: true,  // Include related grades
                },
            });
        },

        // Fetch all Subjects
        getSubjects: async () => {
            return prisma.subject.findMany({
                include: {
                    grades: true,  // Include related grades for each subject
                },
            });
        },
    },

    Mutation: {
        // Create a new Subject
        createSubject: async (_: any, args: { name: string, teacherId: number }) => {
            return prisma.subject.create({
                data: {
                    name: args.name,
                    teacherId: args.teacherId,
                },
            });
        },

        // Update an existing Subject's information
        updateSubject: async (_: any, args: { id: number, name: string, teacherId: number }) => {
            return prisma.subject.update({
                where: { id: args.id },
                data: {
                    name: args.name,
                    teacherId: args.teacherId,  // Update teacherId for the subject
                },
                include: {
                    grades: true,  // Include updated grades
                },
            });
        },

        // Delete a Subject by ID
        deleteSubject: async (_: any, args: { id: number }) => {
            await prisma.subject.delete({
                where: { id: args.id },
            });
            return true;  // Return true to indicate successful deletion
        },
    },

    Subject: {
        // Resolver for grades field in Subject
        grades: async (parent: { id: number }) => {
            return prisma.grade.findMany({
                where: { subjects: { some: { id: parent.id } } },  // Fetch grades associated with this subject
            });
        },
    },
};

export default subjectResolver;
