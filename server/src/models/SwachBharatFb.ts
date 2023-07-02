import mongoose, { Schema } from "mongoose";

const SwachBharatFBSchema = new Schema({
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
const SwachBharatFB = mongoose.model("SwachBharatFB", SwachBharatFBSchema);
export default SwachBharatFB;
export const createFeedbackSS = (values: Record<string, any>) =>
  new SwachBharatFB(values)
    .save()
    .then((SwachBharatFB) => SwachBharatFB.toObject());
