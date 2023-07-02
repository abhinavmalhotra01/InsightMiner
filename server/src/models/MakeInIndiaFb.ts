import mongoose, { Schema } from "mongoose";

const MakeInIndiaFBSchema = new Schema({
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
const MakeInIndiaFB = mongoose.model("MakeInIndiaFB", MakeInIndiaFBSchema);
export default MakeInIndiaFB;
export const createFeedbackMS = (values: Record<string, any>) =>
  new MakeInIndiaFB(values).save().then((MakeInIndiaFB) => MakeInIndiaFB.toObject());
