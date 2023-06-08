import mongoose, { Schema } from "mongoose";
const DemonetisationSchema = new Schema({
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

const Demonetisation = mongoose.model("Demonetisation", DemonetisationSchema);
export default Demonetisation;
export const createFeedbackD = (values: Record<string, any>) =>
  new Demonetisation(values).save().then((feedback) => feedback.toObject());
