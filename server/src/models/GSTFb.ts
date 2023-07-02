import mongoose, { Schema } from "mongoose";

const GSTFBSchema = new Schema({
  rating: {
    type: Number,
    // required: true,
  },
  name: {
    type: String,
    required: true,
  },
  topKeyword: { type: String },
  sentiments: { type: Number },
});
const GSTFB = mongoose.model(
  "GSTFB",
  GSTFBSchema
);
export default GSTFB;
export const createFeedbackGS = (values: Record<string, any>) =>
  new GSTFB(values)
    .save()
    .then((GSTFB) => GSTFB.toObject())
    // .end();
