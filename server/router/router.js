import express from "express";
const router = express.Router();
import apiSchema from '../models/models.js'


router.get('/getdata', async(req, res) => {
    try {
        const getData = await apiSchema.find();
        res.status(201).json(getData);

    } catch (error) {
        console.log(error);
    }
})

export default router