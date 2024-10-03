import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getUserFromToken = async (token: string) => {
    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY || '');
        const userId = (decodedToken as any).userId;
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (user?.role == 'admin') {
            return user;
        }

        return null;
    } catch (error) {
        return null;
    }
};

export const context = async ({ req }: any) => {
    const token = req.headers.authorization || '';
    const user = await getUserFromToken(token);
    return { user };
};
