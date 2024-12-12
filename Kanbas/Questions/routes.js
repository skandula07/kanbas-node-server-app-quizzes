import * as questionsDao from "./dao.js";


export default function QuestionRoutes(app) {

    const findQuestionById = async (req, res) => {
        const { questionId } = req.params;
        console.log(req.params)
    
        const question = await questionsDao.findQuestionById(questionId);
        res.json(question);
      };
      app.get("/api/questions/:questionId", findQuestionById);


      app.put("/api/questions/:questionId", async (req, res) => {
        const { questionId } = req.params;
        const questionUpdates = req.body;
        const status = await questionsDao.updateQuestion(questionId, questionUpdates);
        res.send(status);
      });
    
      app.delete("/api/questions/:questionId", async (req, res) => {
        const { questionId } = req.params;
        const status = await questionsDao.deleteQuestion(questionId);
        res.send(status);
      });
    



}


