export enum Role {
    admin = 'admin',
}

export interface User {
    id: string
    role: Role
    name: string
    email: string
}
