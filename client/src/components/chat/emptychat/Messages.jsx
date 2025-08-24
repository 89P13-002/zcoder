import { Box,styled } from "@mui/material";
import Footer from "./Footer";
import { useContext,useEffect,useState,useRef } from "react";
import { AccountContext } from "../../constants/contexts/AccountProvider";
import { newMessage } from "../../../service/api.js";
import { getMessages } from "../../../service/api.js";
import SingleMessage from "./singleMessage.jsx";
import background from "./background.jpg";

const Container = styled(Box)({
  backgroundImage: `url(${background})`,
  backgroundSize: "50%",
  backgroundColor: "black"
});

const Contai = styled(Box)({
  padding: "1px 30px"
});

const Component = styled(Box)({
  height: "67vh",
  overflowY: "scroll" // Enables vertical scrolling
});

function Messages({person, conversation}){
    const [value, setValue] = useState('');
    const [messages,setMessages] = useState([]);
    const [newMessageFlag,setNewMessageFlag] = useState(false);
    const [incomingMessage,setIncomingMessage] = useState(null);
    const scrollRef = useRef();
    const {account,socket} = useContext(AccountContext);

    useEffect(() => {
        socket.current.on('getMessage',data => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            })
        })
    },[]);

    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessages(conversation._id);
            setMessages(data);
            // console.log(data);
        }

        getMessageDetails();
    },[person._id,conversation._id,newMessageFlag]);
    
    useEffect(() => {
        scrollRef.current?.scrollIntoView({transition:'smooth'})
    },[messages]);

    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
        setMessages((prev) => [...prev,incomingMessage]);
    },[incomingMessage,conversation]);

    const receiverId = conversation?.members?.find(member => member !== account.sub);

    async function sendText(e){
        const code = e.keyCode || e.which;
        if(code === 13){
            let message = {
                senderId: account.sub,
                receieverId: receiverId,
                conversationId:conversation._id,
                type: 'text',
                text: value
            };
            // console.log(message);

            socket.current.emit('sendMessage',message)
            await newMessage(message);
            setValue('');
            setNewMessageFlag(prev => !prev);
        }
    }

    return(
        <Container>
            <Component>
                {messages && messages.map((message,index) =>(
                    <Contai key={index} ref={scrollRef}>
                        <SingleMessage message={message}></SingleMessage>
                    </Contai>
                ))}
            </Component>
            <Footer
                sendText={sendText}
                setValue={setValue}
                value={value}
            />
        </Container>
    )
};

export default Messages;