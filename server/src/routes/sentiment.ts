import express from "express"
import { getSentiment } from "controllers/nlp"

const app = express()
app.use(express.json())
app.post("/api/sentiment", (req, res) => {
    // pass below as json object in postman
    // "data":[
    //     "this is awefull", 
    //     "this is awesome",
    //     "I really enjoyed the speaker th    is month. Would love to hear another presentation",
    //     "Would you consider moving the meeting time 30 minutes to about 6pm. It's tough to make it to the meetings on time right after work",
    //     "i will be there."
    // ]
    const data = req.body.data;
  
    const sentiments =  data.map((element:string) =>getSentiment(element));
    return res.send({ sentiments });
  });