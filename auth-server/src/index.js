import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import auth from './routes/auth';
import products from './routes/products';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/himmee", { useNewUrlParser: true });


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers");
    next();
});

app.use('/api/auth', auth);
//app.use('/api/products', products);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8080, () => console.log('Running on localhost:8080'));
