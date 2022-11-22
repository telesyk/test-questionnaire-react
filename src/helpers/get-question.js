function getQuestion(questions, id) {
  return questions.find((question) => question.id === id);
}

export default getQuestion;
