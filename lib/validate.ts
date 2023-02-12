import { ILogin,IRegister } from "@/types";

export function login_validate(values : ILogin) {
    const errors: {
        email: string;
        password: string;
    } = { email: '', password: '' };

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    // validation for password
    if (!values.password) {
        errors.password = "Required";
    } else if (values.password.length < 8 || values.password.length > 20) {
        errors.password = "Must be greater then 8 and less then 20 characters long";
    } else if (values.password.includes(" ")) {
        errors.password = "Invalid Password";
    }

    return errors;

}

export function registerValidate(values: IRegister) {
    const errors: {message: string;} = {message: ''};

    if (!values.full_name) {
        errors.message = "Full name is Required";
        return errors;
    } 

    if (!values.email) {
        errors.message = 'Email is Required';
        return errors;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.message = 'Invalid email address';
        return errors;
    }

    // validation for password
    if (!values.password) {
        errors.message = "Password is Required";
        return errors;
    } else if (values.password.length < 8 || values.password.length > 20) {
        errors.message = "Password must be greater then 8 and less then 20 characters long";
    } 

    // validate confirm password
    if (!values.confirmPassword) {
        errors.message = "Confirm Password is required";
    } else if (values.password !== values.confirmPassword) {
        errors.message = "Password Not Match...!"
    } 

    return errors;
}