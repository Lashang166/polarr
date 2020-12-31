const express = require("express");
const mongosoe = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const path = require('path')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

require('dotenv').config();

const db = process.env.MONGODB_URL;

mongosoe.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
},(err) => console.log("db", err));

app.use('/user', require('./routes/userRoute'));
app.use('/product', require('./routes/productRoute'));
app.use('/order', require('./routes/ordersRoute'));

if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log('server ' + PORT))