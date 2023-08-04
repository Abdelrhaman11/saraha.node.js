import { Schema , model } from "mongoose";

const userSchema=new Schema({

    firstName:String,
    lastName:String,
    userName:{type:String , require:true},
    email:{type:String , require:true , unique:true , lowercase:true},
    password:{type:String , require:true},
    confirmEmail:{type:Boolean , default:false},
    gender:{type:String , default:"male" , enum:["male","female"]},
    phone:String,
    age:Number,
    profileImage:{secure_url:String , public_id:String},
    coverImages:[{secure_url:String , public_id:String}],

},
{timestamps:true})

const userModel=model("User", userSchema);
export default userModel;

