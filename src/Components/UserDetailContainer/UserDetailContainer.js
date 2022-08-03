import React from "react";
import UserDetail from "../UserDetail/UserDetail";
import { Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";



const UserDetailContainer = () => {

    const { userLogged, users } = useSelector(state => state.user);
    const id = users.findIndex(user => user.email === userLogged.email);




    return (
        <Container 
        sx={{ 
            padding: 12,
            minHeight: "100vh",

         }}>
            <Grid>
                <UserDetail props={users[id]} />
            </Grid>
        </Container>
    );
};

export default UserDetailContainer;
