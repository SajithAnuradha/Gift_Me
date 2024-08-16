import giftModel from "../models/giftModel.js";
import fs from 'fs';


// add gift item

const addgift = async (req, res) => {
    let image_filename = `${req.file.filename}`

    const gift = new giftModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await gift.save();
        res.json({ success: true, message: "Food Added" })
    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })

    }
}

// all gift list
const listgift = async (req, res) => {
    try {
        const gifts = await giftModel.find({});
        res.json({ success: true, data: gifts })
    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }

}

// remove good items
const removegift = async (req, res) => {
    try {
        const gift = await giftModel.findById(req.body.id)
        fs.unlinkSync(`uploads/${gift.image}`, () => { })

        await giftModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Gift Removed" })

    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })

    }

}
const totalCount = async (req, res) => {

    try {
        const Count = await giftModel.countDocuments();
        res.json({ success: true, count: Count });
    }
    catch (err) {
        res.json({ success: false, message: "Error" })

    }



}



export { addgift, listgift, removegift, totalCount }