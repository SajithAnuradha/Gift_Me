import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from 'validator'







// login user

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "user does not exists" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Credentials" })
        }
        const token = createToken(user._id, 'user');
        return res.json({ success: true, token })


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error" })
    }

}

const createToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
}



//register user

const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        //checking user email in exits
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "user already exists" })
        }
        // validating email format $ Strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Enter valid Email" })

        }
        // check password length
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong Password" })
        }
        // hashing the user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
            role: "user"
        })
        const user = await newUser.save();
        const token = createToken(user._id, 'user')
        res.json({ success: true, token })




    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error" })
    }


}


const totalCount = async (req, res) => {
    try {

        const count = await userModel.countDocuments();
        res.json({ success: true, Count: count });
    } catch (error) {
        res.json({ success: false, message: "error" })

    }

}
export { loginUser, registerUser, totalCount }
