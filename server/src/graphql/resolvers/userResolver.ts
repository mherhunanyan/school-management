import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const userResolver = {
    Query: {
        // Fetch the currently logged-in user
        me: async (_: any, __: any, context: { user: any }) => {
            if (!context.user) {
                throw new Error("Not authenticated");
            }
            return prisma.user.findUnique({ where: { id: context.user.id } });
        },
    },

    Mutation: {
        // Login resolver
        login: async (_: any, args: { email: string, password: string }) => {
            const user = await prisma.user.findUnique({
                where: { email: args.email },
            });

            if (!user) {
                throw new Error("User not found");
            }

            const valid = await bcrypt.compare(args.password, user.passwordHash);
            if (!valid) {
                throw new Error("Invalid password");
            }

            // Generate JWT token
            const token = jwt.sign({ userId: user.id, role: user.role }, process.env.SECRET_KEY || '', {
                expiresIn: '1d',  // Token expiration
            });

            return {
                user: {
                    id: user.id,
                    email: user.email,
                    role: user.role,
                },
                token,
            };
        },
    },
};

export default userResolver;
