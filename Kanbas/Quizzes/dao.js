import model from "./model.js"; // Import the Quiz model

export const findQuizById = (quizId) => model.findById(quizId);

export const updateQuiz = (quizId, updatedQuiz) =>
model.updateOne({ _id: quizId }, { $set: updatedQuiz });

export const deleteQuiz = (quizId) => {
  const quiz = model.deleteOne({ _id: quizId });
  return quiz;
};

export const createQuiz = (newQuiz) => {
  delete newQuiz._id;
  return model.create(newQuiz);
};

export const findQuizzes = () => model.find(); // Fetch all quizzes
