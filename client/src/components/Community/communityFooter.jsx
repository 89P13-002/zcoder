import { Box, InputBase, styled } from "@mui/material";
import {SmileyIcon, MicIcon,PlusIcon } from "../chat/emptychat/icons";
import { useState } from "react";

const Container = styled(Box)({
    height: '100px',
    display: 'flex',
    background: 'black',
    width: '1035px',
    alignItems: 'center',
    // justifyContent: 'space-between',
    padding: '0 15px',
    '& > *': {
        margin: '5px',
        color: '#919191',
    }
});

const Search = styled(Box)({
    backgroundColor: '#FFFFFF',
    // borderRadius: '18px',
    width: '850px',
    borderRadius: '25%',
});

const InputField = styled(InputBase)({
    width: '100%',
    height: '60px',
    padding: '20px',
    backgroundColor: 'black',
    color: 'white',
});

const Footer = ({ sendText, value, setValue }) => {
    return(
        <Container>
            <SmileyIcon />
            <PlusIcon />
            <Search>
                <InputField
                    placeholder="Type a message"
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={(e)=>sendText(e)}
                    value={value}
                />
            </Search>
        </Container>
    )
};

export default Footer;
