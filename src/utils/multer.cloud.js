import multer from 'multer';


export const fileValidation={
    image:['image/jpeg' , 'image/jpg' , 'image/png' , 'image/gif'],
    file:['application/pdf' , 'application/msword'],
}


export function fileUpload( validationFile){

    
    const storage=multer.diskStorage({})

    function fileFilter(req,file,cb){
        if(validationFile.includes(file.mimetype))
        {
            cb(null , true)
        }
        else
        {
            cb(new Error("in-valid Format") , false)
        }
    }


    const upload=multer({dest:'uploads', fileFilter , storage})
    return upload
}




