import mongoose, { Schema } from "mongoose";
const MakeInIndiaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  answer1: {
    type: String,
    required: true,
    min: 10,
    max: 200,
  },
  answer2: {
    type: String,
    required: true,
    min: 10,
    max: 200,
  },
  answer3: {
    type: String,
    required: true,
    min: 10,
    max: 200,
  },
  answer4: {
    type: String,
    required: true,
    min: 10,
    max: 200,
  },
  answer5: {
    type: String,
    required: true,
  },
  answer6: {
    type: String,
    required: true,
  },
});

const MakeInIndia = mongoose.model("MakeInIndia", MakeInIndiaSchema);
export default MakeInIndia;
export const createFeedbackM = (values: Record<string, any>) =>
  new MakeInIndia(values).save().then((makeinindia) => makeinindia.toObject());