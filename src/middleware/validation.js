


// export const validation=(schema)=>{
//     return (req,res,next)=>{
//         const validationResult=schema.validate(req.body , {abortEarly:false});


//         if(validationResult.error)
//         {
//             return res.json({message:"Validation Error" , validationError:validationResult.error.details})
//         }
//         return next()
//     }
    
// }



// dataMethods=['params' , 'body' , 'query' , 'headers' , 'file']



// export const validation=(schema)=>{
//     return (req,res,next)=>{
//         const validationErr=[];
//         dataMethods.forEach(key => {
//             if(schema[key])
//        {    
//          const validationResult=schema[key].validate(req[key] , {abortEarly:false});
//             if(validationResult.error)
//             {
//                 validationErr.push(validationResult.error.details)
//             }
//         }

//         });

//         if(validationErr.length)
//         {
//             return res.json({message:"Validation Error" , validationErr})
//         }
//         return next()
//     }
    
// }




export const validation=(schema)=>{
    return (req,res,next)=>{
        const data={...req.body , ...req.params  , ...req.query};
        const validationResult=schema.validate(data , {abortEarly:false});


                if(validationResult.error)
                {
                    return res.json({message:"Validation Error" , validationError:validationResult.error.details})
                }
        

        return next()
    }
    
}





