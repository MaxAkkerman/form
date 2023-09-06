import * as yup from 'yup';
import {IUser} from "../../shared/types";
// @ts-ignore
export const ViewControllerSchema:yup.ObjectSchema<IUser> = yup.object().shape({
    name: yup.string().required(`Name is required`),
    age: yup.number().typeError('Age is required'),
    subscribed: yup.boolean(),
    employed: yup.boolean(),
});
