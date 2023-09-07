import * as React from "react";
import {IUser} from "../../shared/types";
import {defaultValues} from "../../features/ViewController/constants";

interface Context {
        handleAddUser: ({newUser}: { newUser: IUser }) => void,
        handleDeleteUser: () => void,
        handlePickUser: ({pickedUserID}: { pickedUserID: number }) => void,
        users: IUser[],
        pickedUserID:number|null
}
export const UsersStoreContext = React.createContext({
        handleAddUser: ({newUser}: { newUser: IUser }) => {
        },
        handleDeleteUser: () => {
        },
        handlePickUser: ({pickedUserID}: { pickedUserID: number }) => {
        },
        users: [defaultValues],
        pickedUserID: 0
    } as Context
);
