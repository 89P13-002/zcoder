import communityMessage from "../model/CommunityMessage.js";

export async function newCMessage(request,response){
    try{
        const newCMessage = new communityMessage(request.body);
        await newCMessage.save();
        return response.status(200).json('communityMessage is sent')
    }
    catch(err){
        return response.status(500).json(err.message);
    }
}

export const getCMessage = async(request,response) => {
    try {
        const communityMessages = await communityMessage.find({});
        return response.status(200).json(communityMessages);
    }
    catch(err){
        return response.status(500).json(err.message);
    }
}