import {IUser} from "../../shared/types";

export const defaultValues: IUser = {
    id: 1,
    name: null,
    age: null,
    subscription: "Subscribed",
    employment: false
}
export const SUBSCRIBED_OPTIONS = [
    {
        label: 'Subscribed',
        value: 'Subscribed'
    },
    {
        label: 'Not Subscribed',
        value: 'Not Subscribed'
    },
    {
        label: 'Other',
        value: 'Other'
    }
]
