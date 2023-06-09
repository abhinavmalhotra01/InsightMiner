import mongoose, { Schema } from "mongoose";
const SwachBharatSchema = new Schema({
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

const SwachBharat = mongoose.model("SwachBharat", SwachBharatSchema);
export default SwachBharat;

export const createFeedbackS = (values: Record<string, any>) =>
  new SwachBharat(values).save().then((swachbharat) => swachbharat.toObject());
