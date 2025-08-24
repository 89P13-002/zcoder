import CommunityChatHeader from "./CommunityChatHeader";
import CommunityMessages from "./CommunityMessages";
import { Box, styled } from "@mui/material";

const Container = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'flex-end',
});

function CommunityChatBox() {
    return (
        <Container>
            <CommunityChatHeader />
            <CommunityMessages />
        </Container>
    );
}

export default CommunityChatBox;
// This component renders the chat box for the community, including the header and messages.