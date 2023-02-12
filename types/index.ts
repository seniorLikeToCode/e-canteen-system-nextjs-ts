export interface ILogin {
    contact?: number;
    email?: string;
    password: string;
}

export interface IRegister {
    full_name: string;
    password: string;
    confirmPassword?: string;
    email: string;
    contact: string;
}
