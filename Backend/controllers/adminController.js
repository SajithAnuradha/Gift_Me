
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from 'validator'
import adminModel from "../models/adminModel.js";







// login admin

const loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await adminModel.findOne({ email })
        if (!admin) {
            return res.json({ success: false, message: "admin does not exists" })
        }
        const isMatch = await bcrypt.compare(password, admin.password)
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Credentials" })
        }
        const token = createToken(admin._id, 'admin');
        return res.json({ success: true, token })


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error" })
    }

}

const createToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET)
}


//register Admin

const registerAdmin = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        //checking user email in exits
        const exists = await adminModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "admin already exists" })
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
        const newAdmin = new adminModel({
            name: name,
            email: email,
            password: hashedPassword,
            role: "admin"
        })
        const admin = await newAdmin.save();
        const token = createToken(admin._id, 'admin')
        res.json({ success: true, token })




    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error" })
    }


}

export { loginAdmin, registerAdmin }