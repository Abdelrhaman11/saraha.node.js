import  JsonWebToken  from "jsonwebtoken";
import { asyunkcHandler } from "../utils/errorHandling.js"
import userModel from "../../DB/model/user.model.js";


export const auth=asyunkcHandler(async(req,res, next)=>{
    const {authorization}=req.headers
    if(!authorization?.startsWith(process.env.TOKEN_BEARER))
    {
        return next(new Error("authorization is required or In_valid BearerKey",{causer:400}))
    }
    const token=authorization.split(process.env.TOKEN_BEARER)[1]
    if(!token)
    {
        return next(new Error("token is required" , {causer:401}))

    }

    const decoded=JsonWebToken.verify(token,process.env.TOKEN_SIGNATURE)

    if(!decoded?.id)
    {
        return next(new Error("In-valid token" , {causer:400}))

    }
        const user=await userModel.findById(decoded.id);

        if(!user)
        {
            return next(new Error("Not register account", {causer:401}))
    
        }
        req.user=user
        return next()

})