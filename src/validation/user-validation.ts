import { z, ZodType } from "zod";

export class UserValidation {
    static readonly REGISTER: ZodType = z.object({
        username: z.string().min(1),
        password: z.string().min(1),
        name: z.string().min(1),
    })

    static readonly LOGIN: ZodType = z.object({
        username: z.string().min(1),
        password: z.string().min(1),
    })
}