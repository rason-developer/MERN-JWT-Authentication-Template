
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from "http";
import router from  "./routes";
import mongoose from "mongoose";
import { CONNECTION_URL } from './db/connection';

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('tiny'));

const server = http.createServer(app);

server.listen(4455, () => {
    console.log("Server Running on http://localhost:4455/");
});

mongoose.Promise = Promise;
mongoose.connect(CONNECTION_URL);
mongoose.connection.on("error", (error:Error) => {
    console.log(error);
})

app.use('/', router());


