import userModel from "../../../DB/model/user.model.js"
import cloudinary from "../../utils/cloudinary.js";
import { asyunkcHandler } from "../../utils/errorHandling.js"
import  JsonWebToken  from "jsonwebtoken";
import { generatedQRcode } from "../../utils/qrcode.js";

export const getUser=asyunkcHandler(async(req,res,next)=>{
    // const {authorization}=req.headers;
    // const decoded=JsonWebToken.verify(authorization,"jhoiasohoidx789jklnca()khnasochnioasnciknopq869?[]jkuiuivb")
    const user=await userModel.findById(req.user._id);
    return res.json({message:"Done",user})
})

export const profileImage=asyunkcHandler(async(req,res,next)=>{

    // const cloud=await cloudinary.uploader.upload(req.file.path)
    const {secure_url , public_id}=await cloudinary.uploader.upload(req.file.path , {folder:`Saraha/user/${req.user._id}/profile`})

    const user=await userModel.findByIdAndUpdate(
        req.user._id,
        {profileImage: {secure_url , public_id}},
        // {profileImage: req.file.finalDest},
        {new:true}
    )
    

    return res.json({message:"Done",file:req.file , user })
})


export const coverImage=asyunkcHandler(async(req,res,next)=>{

    const images=[];
    for(const file of req.files)
    {
        const {secure_url , public_id}=await cloudinary.uploader.upload(file.path , {folder:`Saraha/user/${req.user._id}/profile/cover`})

        images.push({secure_url , public_id})
    }

    const user=await userModel.findByIdAndUpdate(
        {_id:req.user._id},
        {coverImage:images},
        {new:true}
    )

    return res.json({message:"Done",file:req.files , user})
})



export const profile=asyunkcHandler(async(req,res,next)=>{

    const userr=await userModel.findById(req.user._id)
    const url =await generatedQRcode(userr)
    return res.json({message:"Done",result:url})
})

