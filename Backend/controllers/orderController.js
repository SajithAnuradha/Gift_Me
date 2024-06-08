import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

//place the user order from frontend

const placeOrder = async (req, res) => {
    console.log("placeOrder working")
    const frontend_url = "http://localhost:5173"
    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address

        })
        await newOrder.save();
        // await userModel.findOneAndUpdate(req.body.userId, { cartData: {} })
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });



        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100
            },
            quantity: item.quantity

        }))


        line_items.push({
            price_data: {
                currency: "usd",
                product_data: {
                    name: "Shipping & Delivery Charges"
                },
                unit_amount: 2 * 100
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: "payment",
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`

        })

        res.json({ success: true, session_url: session.url })


    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Internal server error" })

    }


}


const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;
    try {
        if (success === "true") {
            await orderModel.findByIdAndUpdate(orderId, { payment: true })
            res.json({ success: true, message: "Payment Success" })
        }
        else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false, message: "Payment Failed" })
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: " error" })

    }

}
//users orders for frontend
const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId })
        res.json({ success: true, data: orders })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })


    }


}



export { placeOrder, verifyOrder, userOrders }