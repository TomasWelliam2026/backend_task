import { EntitySchema } from "typeorm"

export interface User {
    id: number,
    username: string,
    password: string,
    email: string
}

export const UserEntity = new EntitySchema<User>({
    name: "users",
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        username: {
            type: String,
            length : 30
        },
        password: {
            type: String,
            length: 30
        },
        email: {
            type: String,
            length: 50
        },
    },
})