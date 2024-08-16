import mongoose from "mongoose";

const giftSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true }
})
//model not re created if already exists
const giftModel = mongoose.models.food || mongoose.model("gift", giftSchema);

export default giftModel;