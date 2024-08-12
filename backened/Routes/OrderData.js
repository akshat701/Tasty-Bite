/*
const express = require('express')
const router = express.Router()
const Order = require('../models/Orders')

router.post('/orderData', async (req, res) => {
    let data = req.body.order_data
    await data.splice(0,0,{Order_date:req.body.order_date})
    console.log("1231242343242354",req.body.email)

    //if email not exisitng in db then create: else: InsertMany()
    let eId = await Order.findOne({ 'email': req.body.email })    
    console.log(eId)
    if (eId===null) {
        try {
            console.log(data)
            console.log("1231242343242354",req.body.email)
            await Order.create({
                email: req.body.email,
                order_data:[data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)

        }
    }

    else {
        try {
            await Order.findOneAndUpdate({email:req.body.email},
                { $push:{order_data: data} }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)
        }
    }
})
module.exports = router;*/

const express = require('express');
const router = express.Router();
const Order = require('../models/Orders');

router.post('/orderData', async (req, res) => {
    try {
        const { email, order_data, order_date } = req.body;

        // Log the received request body for debugging
        console.log('Received order data:', req.body);

        if (!email || !Array.isArray(order_data) || !order_date) {
            return res.status(400).json({ error: 'Email, order data (as an array), and order date are required' });
        }

        await Order.findOneAndUpdate(
            { email },
            { $push: { order_data: { $each: [{ Order_date: order_date }, ...order_data] } } },
            { upsert: true, new: true } // new: true returns the updated document
        );

        res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
});





module.exports = router;
