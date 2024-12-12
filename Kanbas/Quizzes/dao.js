import model from "./model.js"; // Import the Quiz model

export const findQuizById = (quizId) => model.findById(quizId);

export function updateQuiz(quizId, updatedQuiz) {
    console.log("updating quiz... ", quizId);
    console.log("updating quiz with these contents... ", updatedQuiz);
    return model.updateOne({ _id: quizId }, { $set: updatedQuiz });

}

export function deleteQuiz(quizId) {
    console.log(quizId)
    return model.deleteOne({ _id: quizId });
  }


export const createQuiz = (newQuiz) => {
  delete newQuiz._id;
  return model.create(newQuiz);
};

export const findQuizzes = () => model.find(); // Fetch all quizzes



export function findQuizzesForCourse(courseId) {
    return model.find({ course: courseId });
  }