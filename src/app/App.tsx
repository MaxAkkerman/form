import * as React from 'react';
import UsersTable from "../entities/UsersTable/ui/UserTable";
import {IUser} from "../shared/types";
import {useEffect, useState} from "react";
import {ViewController} from "../features/ViewController";
import {Grid} from "@mui/material";

export function App() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [pickedUserID, setPickedUserID] = useState<number | null>(null);

    useEffect(() => {
        const usersJson = localStorage.getItem('users');
        if (usersJson) {
            const users = JSON.parse(usersJson)
            setUsers(users)
        }
    }, [])
    useEffect(() => {
        console.log(users)
    }, [users])

    function handleAddUser({newUser}: { newUser: IUser }) {
        setUsers(prev => {
            newUser.id = users.length;
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
        console.log(pickedUserID)
        setPickedUserID(prev => pickedUserID)
    }

    return (
        <Grid
            sx={{
                display: 'flex',
                width: '100%',
                maxWidth:'80rem',
                margin: 'auto',
                marginTop:'5rem',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                bgcolor: 'background',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
            }}
        >
            <Grid
                sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'background',
                    color: 'text.primary',
                    borderRadius: 1,
                    p: 3,
                }}
            >
                <ViewController
                    handleAddUser={handleAddUser}
                    handleDeleteUser={handleDeleteUser}
                />

                <UsersTable
                    handlePickUser={handlePickUser}
                    pickedUserID={pickedUserID}
                    users={users}
                />

            </Grid>

        </Grid>

    );
}

