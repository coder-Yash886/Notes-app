import yup from "yup";

export const userSchema = yup.object({
  username: yup
    .string()
    .trim()
    .min(3, "Username must be atleast of 3 characters")
    .required(),

  email: yup
    .string()
    .email("The email is not valid one")
    .required(),

  password: yup
    .string()
    .min(6, "Password must be atleast 6 character")
    .required(),
});

export const validateUser = (Schema) => async (req, res, next) => {
  try {
    await Schema.validate(req.body);
    next();
  } catch (error) {
    console.log("❌ Validation Failed");
    console.log("Request Body:", req.body);     // 👈 shows what was received
    console.log("Errors:", error.errors); 
    return res.status(400).json({ errors: error.errors }); // ✅ Fix 1: err → error
  }
};