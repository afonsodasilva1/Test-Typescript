import { Response, Request } from "express";

interface IUser {
    name: string,
    email: string,
    id: string,
    password: string
}
const userMemory: IUser[] = []

export const userIndex = async (req: Request, res: Response)  =>{

}
