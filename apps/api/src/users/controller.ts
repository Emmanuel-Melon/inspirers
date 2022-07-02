import prisma from "../lib/prisma";

export const addUser = async (user) => {
    const newEntry = await prisma.user.create({
        data: user
    });
    return newEntry;
};

export const getUserById = async (userId: number) => {
    const newEntry = await prisma.user.findUnique({
        where: {
            id: userId
        }
    });
    return newEntry;
};

export const modifyUser = async (userId: number, data) => {
    const newEntry = await prisma.user.findUnique({
        where: {
            id: userId
        }
    });
    return newEntry;
};