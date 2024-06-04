// components/QuestionForm.js
import { Trash2 } from "lucide-react";
function QuestionForm({
  questions,
  handleQuestionChange,
  handleAnswerChange,
  handleNextQuestionChange,
  addQuestion,
  addAnswer,
  deleteQuestion,
  deleteAnswer,
  toggleCollapse,
  collapsedQuestions,
}) {
  return (
    <div className="builder">
      {questions.map((question) => (
        <div key={question.id} className="question">
          <div className="question-header">
            <button
              onClick={() => toggleCollapse(question.id)}
              className="collapse-btn"
            >
              {collapsedQuestions[question.id] ? "+" : "-"}
            </button>
            <input
              type="text"
              placeholder="Enter question prompt"
              value={question.prompt}
              onChange={(e) => handleQuestionChange(e, question.id)}
              className="prompt-input"
            />
            <button
              onClick={() => deleteQuestion(question.id)}
              className="delete-btn"
            >
              <Trash2 />
            </button>
          </div>
          {!collapsedQuestions[question.id] && (
            <div className="answers">
              {question.answers.map((answer) => (
                <div key={answer.id} className="answer">
                  <input
                    type="text"
                    placeholder="Enter answer text"
                    value={answer.t}
                    onChange={(e) =>
                      handleAnswerChange(e, question.id, answer.id)
                    }
                    className="answer-input"
                  />
                  <select
                    value={answer.nextid}
                    onChange={(e) =>
                      handleNextQuestionChange(e, question.id, answer.id)
                    }
                    className="nextid-select"
                  >
                    <option value="">Select next question</option>
                    {questions.map((q) => (
                      <option key={q.id} value={q.id}>
                        {q.prompt}
                      </option>
                    ))}
                    <option value="end">Thank you for the information</option>
                  </select>
                  <button
                    onClick={() => deleteAnswer(question.id, answer.id)}
                    className="delete-btn"
                  >
                    <Trash2 />
                  </button>
                </div>
              ))}
              <button
                onClick={() => addAnswer(question.id)}
                className="add-btn"
              >
                Add Answer
              </button>
            </div>
          )}
        </div>
      ))}
      <button onClick={addQuestion} className="add-btn">
        Add Question
      </button>
    </div>
  );
}

export default QuestionForm;
