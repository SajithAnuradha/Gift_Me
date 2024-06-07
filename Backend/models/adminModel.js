import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },

    role: { type: String, required: true },
    password: { type: String, require: true }




}, { minimize: false })


const adminModel = mongoose.model.admin || mongoose.model('admin', adminSchema)
export default adminModel;