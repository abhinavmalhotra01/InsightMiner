import mongoose, { Schema } from "mongoose";
const GSTSchema = new Schema({
  name: {
    type: String,
    
  },
  answer1: {
    type: String,
    
    min: 10,
    max: 200,
  },
  answer2: {
    type: String,
    
    min: 10,
    max: 200,
  },
  answer3: {
    type: String,
    
    min: 10,
    max: 200,
  },
  answer4: {
    type: String,
    
    min: 10,
    max: 200,
  },
  answer5: {
    type: String,
    
  },
  answer6: {
    type: String,
    
  },
});

const GST = mongoose.model("GST", GSTSchema);
export default GST;
export const createFeedbackG = (values: Record<string, any>) =>{
  console.log(values)
  new GST(values).save().then((user) => user.toObject());;
}


