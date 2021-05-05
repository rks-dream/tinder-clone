import express from 'express';
import mongoose from 'mongoose';
import Cards  from './dbCards.js';
import Cors from 'cors';
//  (i) App config
const app = express();   // instance
const port = process.env.PORT || 8001 ;  // dynamically port allocated or it will goes to port 8001 where our application is going to listen
const connection_url = 'mongodb+srv://admin:RRxI94VxpEXBJuN1@cluster0.jiryi.mongodb.net/tinderdb?retryWrites=true&w=majority' ; //connection link

// (ii) Middlewares
app.use(express.json());
app.use(Cors());

// (iii) DB Config
mongoose.connect(connection_url, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true,
})

// (iv) API Endpoints
app.get("/", (req,res) => res.status(200).send("Hello MERN stack developer"));
app.post("/tinder/cards", (req,res) => {
    const dbcard = req.body;
    Cards.create(dbcard, (err,data) => {
        if(err){
            res.status(500).send(err)
        } else{
            res.status(201).send(data);
        }
    });
})

app.get("/tinder/cards", (req,res) => {
    Cards.find((err,data) => {
        if(err){
            res.status(500).send(err)
        } else{
            res.status(200).send(data);
        }
    });
})
// (v) Listener
app.listen(port , () => console.log(`Listening on localhost : ${port}`))