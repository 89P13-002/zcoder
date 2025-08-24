import { useEffect, useState,useContext, Fragment } from "react";
import { getUsers } from "../../../service/api";
import { Box,styled } from "@mui/material";
import Conversation from "./conversation";
import Divider from '@mui/material/Divider';
import { AccountContext } from "../../constants/contexts/AccountProvider";

const Component = styled(Box)({
    height: "67.5vh",
    overflow: "overlay",
    backgroundColor: "black",
    border: "2px solid #3b3b3b"
});

const Sdivider = styled(Divider)({
    margin: "0 0 0 70px",
    background: "#3b3b3b",
    opacity: 0.6
});

function Conversations({text}){
    const {account,socket,setActiveUsers} = useContext(AccountContext);
    const [users,setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
        }
        fetchData();
    },[text]);

    useEffect(() => {
        socket.current.emit('addUsers',account);
        socket.current.on('getUsers', users => {
            setActiveUsers(users);
        });
    },[account])

    return (
        <Component>
            {users.map(user => {
                <Fragment>
                    <Conversation data={user}/>
                    <Sdivider></Sdivider>
                </Fragment>
            })}
        </Component>
    )
}

export default Conversations;
