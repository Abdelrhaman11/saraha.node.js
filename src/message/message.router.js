import { Router } from "express";
import * as msgController from "../message/controller/message.js"
import { auth } from "../middleware/auntication.js";

const router=Router();

router.post("/send" , auth,msgController.sendMessage)
router.get("/getMsg" , auth,msgController.userMessage)


export default router;
