import * as yup from "yup";

export const userSchema = yup.object().shape({
	firstName: yup.string().required().min(3).max(255),
	lastName: yup.string().required().min(3).max(255),
	email: yup.string().required().email().max(255),
	password: yup.string().required().min(6).max(26),
});
