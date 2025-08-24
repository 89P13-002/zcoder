import profile from "../model/Profile.js";

export const addProfile = async(request,response) => {
    try {
        const {sub} = request.body;
        if(!sub){
            return response.status(400).json({msg : 'Sub is required'});
        }

        const updatedProfile = await profile.findOneAndUpdate(
            {sub},
            {$set: request.body},
            {new: true,upsert: true}
        );

        return response.status(200).json(updatedProfile);
    }
    catch(err){
        console.log("Error while adding or updating profile: ",err);
        return response.status(500).json({msg:'Internal Server error'});        
    }
}

export async function getProfile(request,response) {
    try {
        const profiler = await profile.findOne({sub:request.params.sub})
        return response.status(200).json(profiler);
    }
    catch(err){
        return response.status(500).json({error: err.message});
    }
}