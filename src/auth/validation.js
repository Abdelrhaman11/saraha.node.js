import joi from "joi"
export const signup=joi.object({
    firstName:joi.string(),
    lastName:joi.string().min(5).max(20),
    userName:joi.string().alphanum().required(),
    email:joi.string().email().required(),
    password:joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).required(),
    cPassword:joi.string().valid(joi.ref("password")).required(),

    //params
    
    // flag:joi.boolean().required()
})




// export const signup={
//     body:joi.object({
//     firstName:joi.string(),
//     lastName:joi.string().min(5).max(20),
//     userName:joi.string().alphanum().required(),
//     email:joi.string().email().required(),
//     password:joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).required()),
//     cPassword:joi.string().valid(joi.ref("password")).required()
// }),

// params:joi.object({
//     params:joi.object({
//         flag:joi.boolean().required()
//     })
// })

// }

export const login=joi.object({
    email:joi.string().email().required(),
    password:joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).required()
}).required()




