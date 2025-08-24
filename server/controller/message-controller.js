import Message from "../model/Message.js";
import conversation from "../model/Conversation.js";
import message from "../model/Message.js";

export async function newMessage(request,response) {
    try {
        const newMessage = new Message(request.body);
        await newMessage.save();
        await conversation.findByIdAndUpdate(request.body.conversationId,{message : request.body.text});
        return response.status(200).json("Message is sent")
    }
    catch(err){
        return response.status(500).json(err.message);
    }
}

export async function getMessages(request,response) {
    try{
        const messages = await Message.find({conversationId: request.params.id})
        return response.status(200).json(message);
    }
    catch(err){
        return response.status(500).json({error : err.message});
    }
}