import { Typography ,Box,styled} from "@mui/material";
import { SearchIcon } from "./icons.jsx";
import { MorevertIcon } from "./icons.jsx";
import { useContext } from "react";
import { AccountContext } from "../../constants/contexts/AccountProvider.jsx";

const Header = styled(Box)({
  height: "48px",
  background: "black",
  padding: "8px 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
});

const Boxe = styled(Box)({
  display: "flex"
});

const Image = styled("img")({
  height: "40px",
  width: "40px",
  borderRadius: "50%",
  marginLeft: "10px"
});

const Name = styled(Typography)({
    marginLeft: "12px",
    color: "#FFFFFF"
});

const OnlineStatus = styled(Typography)({
    marginLeft: "12px",
    fontSize: "12px",
    color: "#A9A9A9"
});

const Right = styled(Box)({
  marginLeft: 'auto',
  padding: '17px',
  '& > span': {
    padding: '8px',
    color: 'rgba(0, 0, 0, 0.46)',
    fontSize: '24px',
  },
});

function ChatHeader({person}) {
    const {activeUsers} = useContext(AccountContext);
    return (
        <Header>
            <Boxe>
                <Image src={person.picture} alt="dp" />
                    <Box>
                        <Name>{person.name}</Name>
                        <OnlineStatus>{activeUsers?.find(user=>user.sub===person.sub)?'online':'Offline'} </OnlineStatus>
                    </Box>
            </Boxe>
            <Right>
                <SearchIcon />
                <MorevertIcon/>
            </Right>
        </Header>
    )
}

export default ChatHeader;
