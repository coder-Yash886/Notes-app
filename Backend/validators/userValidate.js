import yup from "yup"

export const userSchema  = yup.object({
    username:yup
    .string()
    .trim()
    .min(3, "Username must be atleast of 3 characters")
    .required(),

    email: yup
    .string()
    .email('The email is not valid one')
    .required(),
    password: yup
    .string()
    .min(6, 'Password must be atleast 6 character')
    .required()

    
})


export const validateUser = (Schema) => async(req, res,next) => {
    try{

        await Schema.validate(req.body)
        next()

    } catch(error){

      return res.status(400).json({errors: err.errors})

    }
}