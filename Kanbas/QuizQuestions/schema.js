
import mongoose from "mongoose";

const quizQuestionSchema = new mongoose.Schema(
  {
    question: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "QuestionModel", // Reference to the Question model
      required: true // Ensure this field is required
    },
    quiz: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "QuizModel", // Reference to the Quiz model
      required: true // Ensure this field is required
    }
  },
  { collection: "quizQuestions" } // Specify the collection name in MongoDB
);

// Export the schema so it can be used in the model
export default quizQuestionSchema;
