import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import { AddUser, UserInfo } from '../firebase/firebase';
import { MainPageHeader } from './header';

function UserContainer() {
    const [userList, setUserList] = useState<UserInfo[]>();

    useEffect(() => {

    }, [userList]);

    const addUser = (user: UserInfo) => {
        AddUser(user);
    }

    return (
        <>
            <UserInfoViewer />
            <Button variant='outlined' onClick={() => addUser({ name: "Sample Name" })}> ADD USER </Button>
        </>
    );
}

function UserInfoViewer() {
    return (
        <TableContainer>
            <Table size="small" sx={{ width: 600 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Sample-Name</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}



export function MainPage() {
    return (
        <>
            <MainPageHeader />
            <UserContainer />
        </>
    );
}
