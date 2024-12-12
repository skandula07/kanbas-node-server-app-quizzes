// questionModel.js
import mongoose from "mongoose";
import schema from "./schema.js"; // Import the schema

// Register the model with Mongoose using the schema
const model = mongoose.model("QuestionModel", schema);

// Export the model so it can be used in other parts of your app
export default model;