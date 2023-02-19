export interface ILogin {
    username: string;
    password: string;
}

export interface IRegister {
    full_name: string;
    password: string;
    confirmPassword?: string;
    email: string;
    contact: string;
}

export interface IProductData {
    _id: string;
    product_name: string;
    rate: number;
    available: boolean;
    category: string;
    __v: number;
}

export interface IProducts {
    ok: boolean;
    message: string;
    data: IProductData[];
} 