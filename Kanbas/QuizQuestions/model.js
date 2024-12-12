import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("QuizQuestionsModel", schema);
export default model;
