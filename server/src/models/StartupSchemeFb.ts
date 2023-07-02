import mongoose, { Schema } from "mongoose";

const StartupSchemeFBSchema = new Schema({
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
const StartupSchemeFB = mongoose.model("StartupSchemeFB", StartupSchemeFBSchema);
export default StartupSchemeFB;
export const createFeedbackStS = (values: Record<string, any>) =>
  new StartupSchemeFB(values)
    .save()
    .then((StartupSchemeFB) => StartupSchemeFB.toObject());
