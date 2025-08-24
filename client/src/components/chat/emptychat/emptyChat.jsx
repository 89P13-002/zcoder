import { Box, styled,Typography,  Divider } from '@mui/material';

const Component = styled(Box)({
    background: "black",
    padding: "30px 0",
    textAlign: "center",
    height: "50%"
});

const Container = styled(Box)({
    padding: "0 200px"
});

const Title = styled(Typography)({
    fontSize: "32px",
    fontWeight: 200,
    color: "#FFF",
    margin: "25px 0 10px 0"
});

const StyledDivider = styled(Divider)({
    margin: "40px 0",
    opacity: 0.4
});

const EmptyChat = () => {
    return(
        <Component>
            <Container>
                <Title>Click on user to start chatting</Title>
            </Container>
        </Component>
    )
}

export default EmptyChat;