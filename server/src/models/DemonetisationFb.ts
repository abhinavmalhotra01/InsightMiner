import mongoose, { Schema } from "mongoose";

const DemonetisationFB = new Schema({
  ratings: [{
    type: Number,
    required: true,
  }],
  genConsensus: {
    type: String,
    required: true,
  },
  topKeywords: [{ keyWord: String }],
  sentiments:[
    {value:Number}
  ],
});
