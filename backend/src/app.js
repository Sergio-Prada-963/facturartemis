import express from 'express';


const app = express();
app.set("port",3309);

app.use(express.json());
app.use("/home",express.static('frontend'));



export default app;