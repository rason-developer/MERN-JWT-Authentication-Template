
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from "http";
import router from  "./routes";
import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();
const CONNECTION_URL = process.env.MONGO_URI;
console.log(CONNECTION_URL);
const PORT = process.env.PORT || 8080;
const app = express();


app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('tiny'));

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}/`);
});

mongoose.Promise = Promise;
try {
    mongoose.connect(CONNECTION_URL);
    mongoose.connection.on("error", (error:Error) => {
        console.log(error);
    })
}catch(err) {
    console.log(err);
}


app.use('/', router());


