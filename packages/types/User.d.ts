import { User as BaseUser } from "@prisma/client";

export interface User extends BaseUser {
    login: string;
}
