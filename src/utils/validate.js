export function validateQuestions(questions) {
  for (let question of questions) {
    if (!question.prompt.trim()) {
      return "All question prompts must be filled out.";
    }
    for (let answer of question.answers) {
      if (!answer.t.trim()) {
        return "All answer texts must be filled out.";
      }
    }
  }
  return "";
}
