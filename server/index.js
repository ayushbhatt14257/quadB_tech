import express from 'express';
import dotenv from 'dotenv'
import connectDB from './db/conn.js';
import fetchTop10Results from './defalutData/ApiCall.js';
import router from './router/router.js';
import path from 'path'

const app = express();
app.use(express.json())


//config env
dotenv.config();


const PORT = process.env.PORT;

connectDB();
fetchTop10Results();
app.use(router);

const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, '/client/build')))
app.get('*', (req, res) =>
    res.sendFile(path.join(_dirname, '/client/build/index.html'))
);

app.listen(PORT, (req, res) => {
    console.log(`Running server on PORT ${PORT}`)
})