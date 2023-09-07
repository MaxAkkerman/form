import {ReactNode, useEffect, useState} from "react";
import {IUser} from "../../shared/types";
import {UsersStoreContext} from "./UsersStoreContext";

const getNextIndex = ({array}: {array:IUser[]})=>{
    return array.reduce((prev, current) =>{
    if (+current.id > +prev.id) {
        return current;
    } else {
        return prev;
    }
})};
export function UsersStoreProvider({children}: {children:ReactNode}) {
    const [users, setUsers] = useState<IUser[]>([]);
    const [pickedUserID, setPickedUserID] = useState<number | null>(null);

    useEffect(() => {
        const usersJson = localStorage.getItem('users');
        if (usersJson) {
            const users = JSON.parse(usersJson)
            setUsers(users)
        }
    }, [])

    function handleAddUser({newUser}: { newUser: IUser }) {
        setUsers(prev => {
            newUser.id = users.length;
            if(prev.length !== 0){
                newUser.id = getNextIndex({array:prev}).id + 1;
            }
            const newArr = [...prev, newUser];
            localStorage.setItem('users', JSON.stringify(newArr))
            return newArr
        })
    }

    function handleDeleteUser() {
        if (pickedUserID !== null) {
            setUsers(prev => {
                let splicedArr = prev.filter(user => user.id !== pickedUserID);
                localStorage.setItem('users', JSON.stringify(splicedArr))
                return splicedArr
            })
        }
    }

    function handlePickUser({pickedUserID}: { pickedUserID: number }) {
        setPickedUserID(prev => pickedUserID)
    }

    return (
        <UsersStoreContext.Provider value={{users, pickedUserID, handleAddUser, handleDeleteUser, handlePickUser}}>
            {children}
        </UsersStoreContext.Provider>
    )
}
