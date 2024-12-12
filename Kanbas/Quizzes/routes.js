import * as quizzesDao from "./dao.js";
export default function QuizRoutes(app) {
  

  const findQuizById = async (req, res) => {
    const { quizId } = req.params;
    const quiz = await quizzesDao.findQuizById(quizId);
    res.json(quiz);
  };
  app.get("/api/quizzes/:quizId", findQuizById);


  
    app.put("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
    console.log("updated quiz....",status)

    res.send(status);
  });

  app.delete("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    console.log(quizId)
    const status = await quizzesDao.deleteQuiz(quizId);
    console.log('successfully deleted')
    res.send(status);
  });
}
