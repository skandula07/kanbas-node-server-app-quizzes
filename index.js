//const express = require("express"); // equivalent to import
import express from "express";
import mongoose from "mongoose";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import session from "express-session"; // import new server session library
import "dotenv/config"; // import new dotenv library to read .env file

import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import QuizRoutes from "./Kanbas/Quizzes/routes.js";
import QuestionRoutes from "./Kanbas/Questions/routes.js";

const CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";
mongoose.connect(CONNECTION_STRING); // connect to the kanbas database
const app = express(); // create new express instance
app.use(
  cors({
    credentials: true, // support cookies
    origin: process.env.NETLIFY_URL || "http://localhost:3000", // restrict cross origin resource sharing to the react application
    // use different front end URL in dev and in production
  })
);
const sessionOptions = {
  // default session options
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  // in production
  sessionOptions.proxy = true; // turn on proxy support
  sessionOptions.cookie = {
    // configure cookies for remote server
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));
// configure server sessions after cors

app.use(express.json()); // do all your work after this line
UserRoutes(app);
CourseRoutes(app);
//EnrollmentRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
QuizRoutes(app);
QuestionRoutes(app);

Lab5(app);
Hello(app);
app.listen(app.listen(process.env.PORT || 4000)); // listen to http://localhost:4000
