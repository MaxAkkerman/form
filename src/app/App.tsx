import * as React from 'react';
import {ViewController} from "../features/ViewController";
import {Grid} from "@mui/material";
import {UsersTable} from "../entities";

export function App() {

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
                <ViewController/>
                <UsersTable/>
            </Grid>
        </Grid>
    );
}

