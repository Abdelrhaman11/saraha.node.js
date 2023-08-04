// import QRCode from 'qrcode'
import  QRCode  from "qrcode";

export const generatedQRcode=async(data)=>{
    const url= await QRCode.toDataURL(JSON.stringify(data)) ;
    console.log(url)
    return url;
}

