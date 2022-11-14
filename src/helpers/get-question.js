function getQuestion(data, id) {
  return data.find(question => question.id === id);
}

export default getQuestion;
