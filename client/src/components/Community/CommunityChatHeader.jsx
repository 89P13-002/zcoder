import { Typography, Box, styled } from "@mui/material";

const Header = styled(Box)({
    height: "48px",
    background: "black",
    padding: "8px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const Title = styled(Typography)({
    color: "#FFFFFF",
    fontSize: "20px",
    fontWeight: "bold",
    textTransform: "uppercase",
});

function CommunityChatHeader() {
    return (
        <Header>
            <Title>Community</Title>
        </Header>
    )
}

export default CommunityChatHeader;
// This component renders a header for the community chat section with a styled title.