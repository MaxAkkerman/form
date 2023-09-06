import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import {IUser} from "../../../shared/types";
import {StyledTableCell, StyledTableRow, TableHeader} from "../../../shared/styles/componnents";
import {Grid} from "@mui/material";
import TableCell from "@mui/material/TableCell";

export default function UsersTable({users, handlePickUser, pickedUserID}: {
    users: IUser[] | null,
    pickedUserID: number | null,
    handlePickUser: ({pickedUserID}: { pickedUserID: number }) => void
}) {
    return (
        <Grid
            sx={{
                display: 'flex',
                alignSelf: 'flex-start',
                padding: '0.5rem',
                flex: 2
            }}
        >
            <TableContainer component={Paper}>

                <Table aria-label="customized table">
                    <TableHead>
                        <TableHeader>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Subscription</TableCell>
                            <TableCell align="right">Employment</TableCell>
                        </TableHeader>
                    </TableHead>
                    <TableBody>
                        {users && users.map(user => {
                                const {id, name, age, subscription, employment} = user;

                                return <StyledTableRow selected={pickedUserID === id}
                                                       id={id.toString()} key={id}
                                                       onClick={(e) => handlePickUser({pickedUserID: Number(e.currentTarget.id)})}>
                                    <StyledTableCell component="th" scope="row">
                                        {name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {age}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {subscription ? "Subscribed" : 'Not Subscribed'}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        {employment ? "Employed" : "Unemployed"}
                                    </StyledTableCell>
                                </StyledTableRow>
                            }
                        )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
}
