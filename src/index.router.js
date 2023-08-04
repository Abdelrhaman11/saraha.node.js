import userRouter from "./user/user.router.js"
import authRouter from "./auth/auth.router.js"
import msgRouter from "./message/message.router.js"
import connectDB from "../DB/connection.js";
import { globalErrorHandling } from "./utils/errorHandling.js";

 const bootstrap=(app,express)=>{

    app.use(express.json());

    app.use("/user",userRouter)
    app.use("/auth",authRouter)
    app.use("/message",msgRouter)

    app.use("*",(req,res,next)=>{
        return res.json({message:"In-valid routing"})

    })

    app.use(globalErrorHandling)


    connectDB()


}

export default bootstrap