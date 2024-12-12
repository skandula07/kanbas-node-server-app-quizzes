// questionSchema.js
import mongoose from "mongoose";

// Define the schema for a question
const questionSchema = new mongoose.Schema(
  {
    type: { 
      type: String, 
      enum: ["fill_in_the_blank", "multiple_choice", "true_false", "short_answer"], 
      required: true 
    }, // The type of the question
    
    title: { type: String, required: true }, // Title of the question
    
    points: { type: Number, default: 1 }, // Points for the question
    
    question: { type: String, required: true }, // The actual question text
    
    choices: [
      {
        text: { type: String, required: true }, // Choice text
        isCorrect: { type: Boolean, required: true }, // Whether this choice is correct
      }
    ], // Array of choices, varying number based on question
  },
  { collection: "questions" }  // Specify the collection name in MongoDB
);

// Export the schema so it can be imported elsewhere
export default questionSchema;
