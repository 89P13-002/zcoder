import { Box,InputBase,styled } from "@mui/material";
import { SmileyIcon } from "./icons";
import { MicIcon,PlusIcon } from "./icons";
import { useState } from "react";

const Container = styled(Box)({
    height: "60px",
    display: "flex",
    background: "black",
    width: "1035px",
    alignItems: "center",
    padding: "0 15px",
    "& > *": {
        margin: "5px",
        color: "#919191"
    }
});

const Search = styled(Box)({
    backgroundColor: "#FFFFFF",
    width: "850px",
    borderRadius: "18px"
});

const InputField = styled(InputBase)({
    width: "100%",
    padding: "10px 20px",
    height: "40px",
    fontSize: "16px",
    backgroundColor: "black",
    color: "white"
});

const Footer = ({sendText, setValue, value}) => {
    return (
        <Container>
            <SmileyIcon></SmileyIcon>
            <PlusIcon></PlusIcon>
            <Search>
                <InputField
                    placeholder="Type a message"
                    onChange={(e)=>setValue(e.target.value)}
                    onKeyPress={(e)=>sendText(e)}
                    value={value}
                />
            </Search>
        </Container>
    )
};

export default Footer;