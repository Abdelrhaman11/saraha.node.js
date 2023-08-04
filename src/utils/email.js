
import nodemailer from "nodemailer";

const sendEmail=async({from=process.env.EMAIL,to,subject,text,html,attachments=[]}={})=>{
    const transporter = nodemailer.createTransport({
        service:"gmail",
         auth: {
           user: process.env.EMAIL,
           pass: process.env.EMAIL_PASSWORD
         }
       });
       
       const info = await transporter.sendMail({
           from: `"abdo khaled" <${from}>`, 
           to, 
           subject, 
           text, 
           html, 
           attachments
         });
       
    //    console.log(info);
}
export default sendEmail