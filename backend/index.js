import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();


app.use(bodyParser.json({limit: "30mb", extented:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extented:true}));
app.use(cors());

app.use('/posts', postRoutes);

const urlDB = "mongodb+srv://taha:taha123@cluster0.osxrutg.mongodb.net/memories?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(urlDB,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, ()=> console.log('Connected to mongoose and listenning on 5000')))
.catch(err => console.log(err));
