import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    available_from_date: Date,
    available_until_date: Date,
    due_date: { type: Date, required: true },
    description: String,
    points: { type: Number, required: true, default: 0 },
    group: {
      type: String,
      enum: ["ASSIGNMENTS", "QUIZZES", "EXAM", "PROJECT"],
      default: "ASSIGNMENTS",
    },
    display_grade: {
      type: String,
      enum: ["PERCENTAGE", "POINTS"],
      default: "PERCENTAGE",
    },
    submission_type: {
      type: String,
      enum: ["ONLINE", "ON-PAPER", "NO-SUBMISSION", "EXTERNAL-TOOL"],
      default: "ONLINE",
    },
  },
  { collection: "assignments" }
);
export default schema;
