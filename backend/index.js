import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js'

const app = express();
dotenv.config();

const urlDB = process.env.CONNEXION_URL
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({limit: "30mb", extented:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extented:true}));
app.use(cors());

app.use('/posts', postRoutes);

mongoose.connect(urlDB,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, ()=> console.log('Connected to mongoose and listenning on 5000')))
.catch(err => console.log(err));
