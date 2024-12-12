import model from "./model.js";

export function getAnswersByUserId(userId) {
    return model.find({ user: userId });
}
export function getAnswersByQuizId(quizId) {
    return model.find({ quiz: quizId });
}
export function getAnswersByQuizIdAndUserId(quizId, userId) {
    return model.find({ quiz: quizId, user: userId});
}

export function createAnswer(answer) {
  delete answer._id
  return model.create(answer);

}
export function deleteAnswer(answerId) {
    return model.deleteOne({ _id: answerId });

}
export function updateAnswer(answerId, answerUpdates) {
    return model.updateOne({ _id: answerId }, answerUpdates);

}
  
   