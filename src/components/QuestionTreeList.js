// components/QuestionTreeList.js
function QuestionTreeList({ questionTrees, selectTree }) {
  return (
    <div className="question-tree-list">
      <h2>Question Trees</h2>
      <ul>
        {questionTrees.map((tree) => (
          <li key={tree.id} onClick={() => selectTree(tree.id)}>
            {tree.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionTreeList;
