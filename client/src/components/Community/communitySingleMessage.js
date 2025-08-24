import { useContext } from "react";
import { AccountContext } from "../constants/contexts/AccountProvider.jsx";

import { Box, Typography, styled } from "@mui/material";
import { formatDate } from "../../utils/common-utils.js";

const Own = styled(Box)({
    background: "#015856",
    padding: "10px",
    maxWidth: "60%",
    width: "fit-content",
    marginLeft: "auto",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    wordBreak: "break-word",
    position: "relative",
});

const Wrapper = styled(Box)({
    background: "#202C33",
    padding: "10px",
    maxWidth: "60%",
    width: "fit-content",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    wordBreak: "break-word",
    position: "relative",
});

const Name = styled(Typography)({
    fontSize: 14,
    color: "#FFAB00",
    marginBottom: 2,
});

const Text = styled(Typography)({
    fontSize: 16,
    color: "#fff",
    padding: "0 25px 20px 5px",
});

const Time = styled(Typography)({
    fontSize: 10,
    color: "#A9A9A9",
    position: "absolute",
    bottom: 10,
    right: 10,
});

function SingleMessage({ message }) {
    const { account } = useContext(AccountContext);
    return (
        <>
            {account.sub === message.senderId ? (
                <Own>
                    <Name>You</Name>
                    <Text>{message.text}</Text>
                    <Time>{formatDate(message.createdAt)}</Time>
                </Own>
            ) : (
                <Wrapper>
                    <Name>{message.name}</Name>
                    <Text>{message.text}</Text>
                    <Time>{formatDate(message.createdAt)}</Time>
                </Wrapper>
            )}
        </>
    );
}

export default SingleMessage;