import prisma from "@inspirers/prisma";
import { Routine } from "@prisma/client";

export const getById = async (routineId: string): Promise<Routine> => {
    try {
        return prisma.routine.findUnique({
            where: {
                id: routineId
            },
            include: {
                items: true
            }
        });
    } catch (err) {

    }
};
