import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: String,
    description: String,
    quizType: String,
    points: { type: Number, default: 0 },
    assignmentGroup: String,
    shuffleAnswers: { type: Boolean, default: false },
    timeLimit: { type: Number, default: 30 },
    multipleAttempts: { type: Boolean, default: true },
    showCorrectAnswers: { 
      type: String, 
      enum: ["Immediately after submission", "At the end of the quiz", "Never"], 
      required: true
    },
    accessCode: { type: String, required: false },
    oneQuestionAtATime: { type: Boolean, default: false },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering: { type: Boolean, default: false },
    dueDate: { type: Date, default: null },
    availableDate: { type: Date, required: true },
    untilDate: { type: Date, default: null }
  },
  { collection: "quizzes" }
);

export default schema;
