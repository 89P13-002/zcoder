import React, { Fragment } from 'react';
import { Drawer, Box, Typography, styled } from '@mui/material';
import Profile from './profile';

const drawerStyle = {
    top: 0,
    left: 0,
    height: "100%",
    width: "30%",
    boxShadow: 'none',
    backgroundColor: 'black',
    color: '#FFFFFF'
};

const Header = styled(Box)`
background: black;
height: 115px;
color: #FFFFFF;
display: flex;
& > span, & > p {
    margin-top: auto;
    padding: 15px;
}
`;

const DownBox = styled(Box)`
background: black; 
height: 80%;
color: #FFFFFF;
`;

function InfoDrawer({ open, setOpen }) { 
    function handleClose() {
        setOpen(false);
    }

    return (
        <Fragment>
            {/* Like we changed the dialog style using paperProps, similarly we can do for the drawer */}
            <Drawer
                open={open}
                onClose={handleClose}
                PaperProps={{ sx: drawerStyle }}
                style={{ zIndex: 1500 }}
            >
                <Header>
                    {/* The arrow back icon */}
                    <span data-icon="back">
                        <svg onClick={() => setOpen(false)} viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
                            <title>back</title>
                            <path fill="currentColor" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path>
                        </svg>
                    </span>
                    <Typography style={{ fontSize: "19px", fontWeight: "550" }}>Profile</Typography>
                </Header>
                <DownBox>
                    <Profile />
                </DownBox>
            </Drawer>
        </Fragment>
    );
}

export default InfoDrawer;