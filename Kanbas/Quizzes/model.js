import mongoose from "mongoose";
import schema from "./schema.js";  // Assuming the schema file is named quizSchema.js
const model = mongoose.model("QuizModel", schema);
export default model;
