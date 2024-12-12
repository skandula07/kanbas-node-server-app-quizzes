import model from "./model.js"; // Import the model

  export const findQuestionById = ((questionId) => ( model.findById( questionId )));

  export const updateQuestion = ((questionId, updatedQuestion) =>  model.updateOne({ _id: questionId }, { $set: updatedQuestion }))

  export const deleteQuestion = ((questionId) => {
    const question =  model.deleteOne({ _id: questionId });
    return question;
  })


  export const createQuestion = ((newQuestion) => {
    delete newQuestion._id;
    return model.create(assignment)
    })


