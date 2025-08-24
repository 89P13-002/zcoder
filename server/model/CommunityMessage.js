import mongoose from "mongoose";

const communityMessageSchema = new mongoose.Schema({
    senderId: {
        type: String
    },
    name: {
        type:String
    },
    text: {
        type: String
    },
    type: {
        type: String
    }
},
{
    timestamps:true
});

const communityMessage = mongoose.model('CommunityMessage',communityMessageSchema);
export default communityMessage;