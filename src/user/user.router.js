import { Router } from "express";
import * as userController from "./controller/user.js"
import { auth } from "../middleware/auntication.js";
import { fileUpload, fileValidation } from "../utils/multer.cloud.js";
// import { fileUpload, fileValidation } from "../utils/multer.js";
const router=Router();

router.get("/",auth,userController.getUser)
router.patch("/profile/image",auth,fileUpload(fileValidation.image).single("image"),userController.profileImage)
router.patch("/profile/cover/image",auth,fileUpload(fileValidation.image).array("image",5),userController.coverImage)
router.get("/profile",auth,userController.profile)
// router.patch("/profile/image",auth,fileUpload('user/profile',fileValidation.image).single("image"),userController.profileImage)
// router.patch("/profile/cover/image",auth,fileUpload('user/cover',fileValidation.image).array("image",5),userController.coverImage)
// // router.get("/signup",userController.signUp)


export default router

