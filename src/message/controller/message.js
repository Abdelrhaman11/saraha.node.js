import Message from "../../../DB/model/message.model.js"
import userModel from "../../../DB/model/user.model.js"
import { asyunkcHandler } from "../../utils/errorHandling.js"


export const sendMessage=asyunkcHandler(async(req,res,next)=>{


    const{content , receiverId}=req.body
    const user=await userModel.findById({_id:receiverId})
    if(!user)
    {
        return next(new Error("User Not found"))

    }
    const message=await Message.create({content , receiverId})

    return res.json({message:"Done" , message})


})






export const userMessage=asyunkcHandler(async(req,res,next)=>{

    const id=req.user._id

const message=await Message.find({receiverId:id})

return res.json({message:"Done" , results:message})
    



})