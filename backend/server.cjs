const Veggie = require('./models/Veggie.cjs');
const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const PORT = 5000;
dotenv.config();

const app = express();
app.use(cors());

app.post('/create_veggie', async (req, res) => {
    const newVeggie = new Veggie(req.body);
    await newVeggie.save();
    res.send(newVeggie);
  });
  
  app.get('/veggies', async (req, res) => {
    const veggies = await Veggie.find({});
    res.send(veggies);
  });
  
  app.get('/veggie/:veggieName', async (req, res) => {
    const veggie = await Veggie.findOne({name: req.params.veggieName});
    res.send(veggie);
  });

  
const start = async () => {
    try {
        console.log('connecting to db');
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGO_LOGIN}:${process.env.MONGO_PASSWORD}@cluster0.e4xca20.mongodb.net/`
        );
        app.listen(PORT, () => console.log(`server started, port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();