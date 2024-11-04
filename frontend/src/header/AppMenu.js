import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from '../BibleTrack_cropped.png';
import Container from '@mui/material/Container';

function AppMenu() {

    return (
        <AppBar position="static" color="white">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={logo} height={50} alt={"BibleTrack logo"}/>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default AppMenu;