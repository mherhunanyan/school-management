import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const pupilResolver = {
    Query: {
        // Fetch a single pupil by ID
        getPupil: async (_: any, args: { id: number }) => {
            return prisma.pupil.findUnique({
                where: { id: args.id },
            });
        },

        // Fetch all pupils
        getPupils: async () => {
            return prisma.pupil.findMany();
        },
    },

    Mutation: {
        // Create a new pupil
        createPupil: async (_: any, args: { name: string, gradeId: string }) => {
            return prisma.pupil.create({
                data: {
                    name: args.name,
                    gradeId: +args.gradeId
                },
            });
        },

        // Update an existing pupil's information
        updatePupil: async (_: any, args: { id: number, name: string, gradeId: number }) => {
            return prisma.pupil.update({
                where: { id: args.id },
                data: {
                    name: args.name,
                    gradeId: args.gradeId,
                },
            });
        },

        // Delete a pupil by ID
        deletePupil: async (_: any, args: { id: number }) => {
            await prisma.pupil.delete({
                where: { id: args.id },
            });
            return true;
        },
    },
};

export default pupilResolver;
