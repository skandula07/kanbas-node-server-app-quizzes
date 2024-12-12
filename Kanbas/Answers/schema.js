import mongoose from "mongoose";
const schema = new mongoose.Schema({
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
  user:   { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
  attempt: Number,
  answers: [{
    questionId: String,
    answer: String,
    isCorrect: Boolean
  }]
},
{ collection: "answers" });

export default schema;