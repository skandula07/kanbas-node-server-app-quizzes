import mongoose from "mongoose";
import schema from "./schema";

const model = mongoose.model("QuestionSchema", schema);

export default model;
