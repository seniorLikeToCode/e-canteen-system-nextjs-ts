import { ILogin,IRegister } from "@/types";

export function loginValidate(values : ILogin) {
    const errors: {message: string;} = {message: ''};

    if (!values.username) {
        errors.message = 'Email Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
        errors.message = 'Invalid email address';
    }

    // validation for password
    if (!values.password) {
        errors.message = "Password Required";
    } else if (values.password.length < 8 || values.password.length > 20) {
        errors.message = "Password must be greater then 8 and less then 20 characters long";
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