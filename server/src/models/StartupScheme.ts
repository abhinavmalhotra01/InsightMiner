import mongoose, { Schema } from "mongoose";
const StartUpSchemeSchema = new Schema({
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

const StartUpScheme = mongoose.model(
  "StartUpScheme",
  StartUpSchemeSchema
);
export default StartUpScheme;
export const createFeedbackSt = (values: Record<string, any>) =>
  new StartUpScheme(values).save().then((startupscheme) => startupscheme.toObject());