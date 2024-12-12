import model from "./model.js"; // Import the model


// export function
  export function findQuestionById(questionId) {
    console.log("finding question by id", questionId)
    return model.findOne( { _id : questionId} )
};

  export const updateQuestion = ((questionId, updatedQuestion) =>  model.updateOne({ _id: questionId }, { $set: updatedQuestion }))

  export const deleteQuestion = ((questionId) => {
    const question =  model.deleteOne({ _id: questionId });
    return question;
  })

  export const createQuestion = ((newQuestion) => {
    delete newQuestion._id;
    return model.create(newQuestion)
    })


