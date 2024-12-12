import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    title: {type: String, required: true},
    description: String,
    quizType: String,
    points: { type: Number, default: 0, required: true },
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
    dueDate: Date ,
    availableDate:Date,
    untilDate:  Date 
  },
  
  { collection: "quizzes" }
);

export default quizSchema;
