import mongoose, { Schema } from "mongoose";

const DemonetisationFBSchema = new Schema({
  rating: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  topKeyword: { type: String },
  sentiments: { type: Number },
});
const DemonetisationFB = mongoose.model("DemonetisationFB", DemonetisationFBSchema);
export default DemonetisationFB;
export const createFeedbackDS = (values: Record<string, any>) =>
  new DemonetisationFB(values)
    .save()
    .then((DemonetisationFB) => DemonetisationFB.toObject());

