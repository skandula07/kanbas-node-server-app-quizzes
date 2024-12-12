import model from "./model.js";


export async function findQuestionsForQuiz(quizId) {
      console.log("finding questions for... ", quizId);

    const quizQuestions = await model.find({ quiz: quizId }).populate("question");
    return quizQuestions
      .map((quizQuestion) => quizQuestion.question)
      .filter((quizQuestion) => quizQuestion !== null);
  }