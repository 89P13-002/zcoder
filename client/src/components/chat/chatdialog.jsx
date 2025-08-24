import { Dialog,Box,styled } from "@mui/material";
import React from "react";
import Menu from "./menu/Menu";
import EmptyChat from "./emptychat/emptyChat";
import ChatBox from "./emptychat/ChatBox";
import { useContext } from "react";
import { AccountContext } from "../constants/contexts/AccountProvider";
import RiHeader from "../Header/Header";

const dialogStyle={
    height:"100%",
    width:"100%",
    margin:"0px",
    maxWidth:"100%",
    maxHeight:"100%",
    boxShadow:"none",
    overflow:"hidden" ,
    borderRadius:"0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: "black"
};

const Component = styled(Box)({
    display: "flex",
});

const LeftComponent = styled(Box)({
    minWidth: "450px",
});

const RightComponent = styled(Box)({
    minWidth: "300px",
    width: "73%",
    height: "100%",
    borderLeft: "1px solid rgba(0,0,0,0.14)",
    backgroundColor: "black"
});

function ChatDialog() {
    const { person } = useContext(AccountContext);
    return(
        <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true} maxWidth={'md'}>
            <RiHeader />
            <Component>
                <LeftComponent>
                    <Menu />
                </LeftComponent>
                <RightComponent>
                    {/* console.log(Object.keys(person).length) */}
                    {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
                </RightComponent>
            </Component>
        </Dialog>
    )
};

export default ChatDialog;
// This component renders the chat dialog with a header and a menu on the left, and either