// components/EditForm.js
function EditForm({
  selectedNode,
  handleQuestionChange,
  handleAnswerChange,
  handleNextQuestionChange,
  questions,
}) {
  return (
    selectedNode && (
      <div className="edit-form">
        <h3>Edit Question</h3>
        <div className="edit-group">
          <label>Question Prompt</label>
          <input
            type="text"
            placeholder="Edit question prompt"
            value={selectedNode.prompt}
            onChange={(e) => handleQuestionChange(e, selectedNode.id)}
            className="edit-input"
          />
        </div>
        {selectedNode.answers.map((answer) => (
          <div key={answer.id} className="edit-group">
            <label>Answer Text</label>
            <input
              type="text"
              placeholder="Edit answer text"
              value={answer.t}
              onChange={(e) =>
                handleAnswerChange(e, selectedNode.id, answer.id)
              }
              className="edit-input"
            />
            <label>Next Question</label>
            <select
              value={answer.nextid}
              onChange={(e) =>
                handleNextQuestionChange(e, selectedNode.id, answer.id)
              }
              className="edit-select"
            >
              <option value="">Select next question</option>
              {questions.map((q) => (
                <option key={q.id} value={q.id}>
                  {q.prompt}
                </option>
              ))}
              <option value="end">End</option>
            </select>
          </div>
        ))}
      </div>
    )
  );
}

export default EditForm;
