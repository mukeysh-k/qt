// // src/App.js
// import { useState, useEffect } from "react";
// import ReactFlow, {
//   MiniMap,
//   Controls,
//   Background,
//   applyNodeChanges,
//   applyEdgeChanges,
//   addEdge,
// } from "reactflow";
// import "reactflow/dist/style.css";
// import "./App.css";

// function App() {
//   const initialQuestions = [
//     {
//       id: "_erxxn1zco",
//       prompt: "Are you answering for yourself or someone else?",
//       answers: [
//         { id: "_t6c3v3bk1", t: "Myself", nextid: "end" },
//         { id: "_dae09oac3", t: "Someone else", nextid: "_1koldj40o" },
//       ],
//     },
//     {
//       id: "_1koldj40o",
//       prompt: "How are you related to the person?",
//       answers: [
//         { id: "_svrps2yzo", t: "Spouse", nextid: "_lpgjrb4m4" },
//         { id: "_bk2pi6cwn", t: "Adult-Child", nextid: "_lpgjrb4m4" },
//         { id: "_ir8zg9q5x", t: "Caregiver/Nurse", nextid: "_lpgjrb4m4" },
//         { id: "_o2tcqun0c", t: "Attorney", nextid: "_lpgjrb4m4" },
//         { id: "_zbqm3qzg5", t: "Friend", nextid: "_lpgjrb4m4" },
//         { id: "_96oedhj08", t: "Child", nextid: "_lpgjrb4m4" },
//       ],
//     },
//     {
//       id: "_lpgjrb4m4",
//       prompt: "Is the person there with you?",
//       answers: [
//         { id: "_ijafuo7u5", t: "yes", nextid: "_0yeq2cw4r" },
//         { id: "_68m95n7do", t: "no", nextid: "_njqf9ptei" },
//       ],
//     },
//     {
//       id: "_0yeq2cw4r",
//       prompt: "Are they able to answer you?",
//       answers: [
//         { id: "_u6y90evdi", t: "yes", nextid: "end" },
//         { id: "_k0vleepuo", t: "no", nextid: "_njqf9ptei" },
//       ],
//     },
//     {
//       id: "_njqf9ptei",
//       prompt: "Did they provide written answers?",
//       answers: [
//         { id: "_gwc6n95l1", t: "yes", nextid: "end" },
//         { id: "_d1oqzeras", t: "no", nextid: "_f9sdlo17g" },
//       ],
//     },
//     {
//       id: "_f9sdlo17g",
//       prompt: "Are you answering how you think they would answer?",
//       answers: [
//         { id: "_wkihm1fjz", t: "yes", nextid: "end" },
//         { id: "_s6bvmk138", t: "hoping", nextid: "end" },
//       ],
//     },
//   ];

//   const [questions, setQuestions] = useState(initialQuestions);
//   const [nodes, setNodes] = useState(
//     transformQuestionsToNodes(initialQuestions)
//   );
//   const [edges, setEdges] = useState(
//     transformQuestionsToEdges(initialQuestions)
//   );
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [collapsedQuestions, setCollapsedQuestions] = useState({});
//   const [validationError, setValidationError] = useState("");
//   const [savedJson, setSavedJson] = useState(null);

//   const onNodesChange = (changes) =>
//     setNodes((nds) => applyNodeChanges(changes, nds));
//   const onEdgesChange = (changes) =>
//     setEdges((eds) => applyEdgeChanges(changes, eds));
//   const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

//   useEffect(() => {
//     const transformedNodes = transformQuestionsToNodes(questions);
//     const transformedEdges = transformQuestionsToEdges(questions);
//     setNodes(transformedNodes);
//     setEdges(transformedEdges);
//   }, [questions]);

//   function generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   }

//   function handleQuestionChange(e, questionId) {
//     const newQuestions = questions.map((question) =>
//       question.id === questionId
//         ? { ...question, prompt: e.target.value }
//         : question
//     );
//     setQuestions(newQuestions);
//   }

//   function handleAnswerChange(e, questionId, answerId) {
//     const newQuestions = questions.map((question) =>
//       question.id === questionId
//         ? {
//             ...question,
//             answers: question.answers.map((answer) =>
//               answer.id === answerId ? { ...answer, t: e.target.value } : answer
//             ),
//           }
//         : question
//     );
//     setQuestions(newQuestions);
//   }

//   function handleNextQuestionChange(e, questionId, answerId) {
//     const newQuestions = questions.map((question) =>
//       question.id === questionId
//         ? {
//             ...question,
//             answers: question.answers.map((answer) =>
//               answer.id === answerId
//                 ? { ...answer, nextid: e.target.value }
//                 : answer
//             ),
//           }
//         : question
//     );
//     setQuestions(newQuestions);
//   }

//   function addQuestion() {
//     setQuestions([
//       ...questions,
//       {
//         id: generateId(),
//         prompt: "",
//         answers: [{ id: generateId(), t: "", nextid: "" }],
//       },
//     ]);
//   }

//   function addAnswer(questionId) {
//     const newQuestions = questions.map((question) =>
//       question.id === questionId
//         ? {
//             ...question,
//             answers: [
//               ...question.answers,
//               { id: generateId(), t: "", nextid: "" },
//             ],
//           }
//         : question
//     );
//     setQuestions(newQuestions);
//   }

//   function deleteQuestion(questionId) {
//     setQuestions(questions.filter((question) => question.id !== questionId));
//   }

//   function deleteAnswer(questionId, answerId) {
//     const newQuestions = questions.map((question) =>
//       question.id === questionId
//         ? {
//             ...question,
//             answers: question.answers.filter(
//               (answer) => answer.id !== answerId
//             ),
//           }
//         : question
//     );
//     setQuestions(newQuestions);
//   }

//   function validateQuestions() {
//     for (let question of questions) {
//       if (!question.prompt.trim()) {
//         return "All question prompts must be filled out.";
//       }
//       for (let answer of question.answers) {
//         if (!answer.t.trim()) {
//           return "All answer texts must be filled out.";
//         }
//       }
//     }
//     return "";
//   }

//   function saveQuestions() {
//     const error = validateQuestions();
//     if (error) {
//       setValidationError(error);
//       return;
//     }
//     setValidationError("");
//     setSavedJson(JSON.stringify({ questions }, null, 2));
//   }

//   function handleNodeClick(event, node) {
//     const question = questions.find((q) => q.id === node.id);
//     setSelectedNode(question);
//   }

//   function transformQuestionsToNodes(questions) {
//     const nodes = [];
//     const levels = {};

//     function positionNode(node, level) {
//       if (!levels[level]) {
//         levels[level] = [];
//       }
//       levels[level].push(node);
//       // Adjust the x and y values to add more space between nodes
//       node.position = { x: levels[level].length * 300, y: level * 200 };
//     }

//     questions.forEach((question) => {
//       const node = {
//         id: question.id,
//         data: { label: question.prompt },
//         position: { x: 0, y: 0 },
//       };
//       positionNode(node, 0);
//       nodes.push(node);
//     });

//     // Add a single "end" node
//     const endNode = {
//       id: "end",
//       data: { label: "Thank you for the information" },
//       position: { x: 200, y: (Object.keys(levels).length + 1) * 200 },
//     };
//     nodes.push(endNode);

//     return nodes;
//   }

//   function transformQuestionsToEdges(questions) {
//     const edges = [];

//     questions.forEach((question) => {
//       question.answers.forEach((answer) => {
//         if (answer.nextid !== "end") {
//           edges.push({
//             id: `${answer.id}-${answer.nextid}`,
//             source: question.id,
//             target: answer.nextid,
//             label: answer.t,
//           });
//         } else {
//           edges.push({
//             id: `${answer.id}-end`,
//             source: question.id,
//             target: "end",
//             label: answer.t,
//           });
//         }
//       });
//     });
//     return edges;
//   }

//   function toggleCollapse(questionId) {
//     setCollapsedQuestions((prevState) => ({
//       ...prevState,
//       [questionId]: !prevState[questionId],
//     }));
//   }

//   return (
//     <div className="App">
//       <h1>Question Tree Builder</h1>
//       <div className="builder">
//         {questions.map((question) => (
//           <div key={question.id} className="question">
//             <div className="question-header">
//               <button
//                 onClick={() => toggleCollapse(question.id)}
//                 className="collapse-btn"
//               >
//                 {collapsedQuestions[question.id] ? "+" : "-"}
//               </button>
//               <input
//                 type="text"
//                 placeholder="Enter question prompt"
//                 value={question.prompt}
//                 onChange={(e) => handleQuestionChange(e, question.id)}
//                 className="prompt-input"
//               />
//               <button
//                 onClick={() => deleteQuestion(question.id)}
//                 className="delete-btn"
//               >
//                 Delete Question
//               </button>
//             </div>
//             {!collapsedQuestions[question.id] && (
//               <div className="answers">
//                 {question.answers.map((answer) => (
//                   <div key={answer.id} className="answer">
//                     <input
//                       type="text"
//                       placeholder="Enter answer text"
//                       value={answer.t}
//                       onChange={(e) =>
//                         handleAnswerChange(e, question.id, answer.id)
//                       }
//                       className="answer-input"
//                     />
//                     <select
//                       value={answer.nextid}
//                       onChange={(e) =>
//                         handleNextQuestionChange(e, question.id, answer.id)
//                       }
//                       className="nextid-select"
//                     >
//                       <option value="">Select next question</option>
//                       {questions.map((q) => (
//                         <option key={q.id} value={q.id}>
//                           {q.prompt}
//                         </option>
//                       ))}
//                       <option value="end">Thank you for the information</option>
//                     </select>
//                     <button
//                       onClick={() => deleteAnswer(question.id, answer.id)}
//                       className="delete-btn"
//                     >
//                       Delete Answer
//                     </button>
//                   </div>
//                 ))}
//                 <button
//                   onClick={() => addAnswer(question.id)}
//                   className="add-btn"
//                 >
//                   Add Answer
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//         <button onClick={addQuestion} className="add-btn">
//           Add Question
//         </button>
//         <button onClick={saveQuestions} className="save-btn">
//           Save Questions
//         </button>
//         {validationError && <div className="error">{validationError}</div>}
//         {savedJson && (
//           <div>
//             <h2>Saved JSON</h2>
//             <pre>{savedJson}</pre>
//           </div>
//         )}
//         {/* <button onClick={() => reloadQuestions(initialQuestions)} className="reload-btn">Reload Questions</button> */}
//       </div>
//       <div className="tree-container">
//         <h2>Question Tree Visualization</h2>
//         <div id="treeWrapper" style={{ width: "100%", height: "80vh" }}>
//           <ReactFlow
//             nodes={nodes}
//             edges={edges}
//             onNodesChange={onNodesChange}
//             onEdgesChange={onEdgesChange}
//             onConnect={onConnect}
//             onNodeClick={handleNodeClick}
//           >
//             <MiniMap />
//             <Controls />
//             <Background />
//           </ReactFlow>
//         </div>
//       </div>
//       {selectedNode && (
//         <div className="edit-form">
//           <h3>Edit Question</h3>
//           <div className="edit-group">
//             <label>Question Prompt</label>
//             <input
//               type="text"
//               placeholder="Edit question prompt"
//               value={selectedNode.prompt}
//               onChange={(e) => handleQuestionChange(e, selectedNode.id)}
//               className="edit-input"
//             />
//           </div>
//           {selectedNode.answers.map((answer) => (
//             <div key={answer.id} className="edit-group">
//               <label>Answer Text</label>
//               <input
//                 type="text"
//                 placeholder="Edit answer text"
//                 value={answer.t}
//                 onChange={(e) =>
//                   handleAnswerChange(e, selectedNode.id, answer.id)
//                 }
//                 className="edit-input"
//               />
//               <label>Next Question</label>
//               <select
//                 value={answer.nextid}
//                 onChange={(e) =>
//                   handleNextQuestionChange(e, selectedNode.id, answer.id)
//                 }
//                 className="edit-select"
//               >
//                 <option value="">Select next question</option>
//                 {questions.map((q) => (
//                   <option key={q.id} value={q.id}>
//                     {q.prompt}
//                   </option>
//                 ))}
//                 <option value="end">Thank you for the information</option>
//               </select>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// src/App.js
import { useState } from "react";
import "reactflow/dist/style.css";
import "./App.css";
import QuestionForm from "./components/QuestionForm";
import TreeVisualization from "./components/TreeVisualization";
import EditForm from "./components/EditForm";
import { useQuestions } from "./hooks/useQuestions";
import { useValidation } from "./hooks/useValidation";
import { useTransform } from "./hooks/useTransform";
import { applyNodeChanges, applyEdgeChanges, addEdge } from "reactflow";
const initialQuestions = [
  {
    id: "_erxxn1zco",
    prompt: "Are you answering for yourself or someone else?",
    answers: [
      { id: "_t6c3v3bk1", t: "Myself", nextid: "end" },
      { id: "_dae09oac3", t: "Someone else", nextid: "_1koldj40o" },
    ],
  },
  {
    id: "_1koldj40o",
    prompt: "How are you related to the person?",
    answers: [
      { id: "_svrps2yzo", t: "Spouse", nextid: "_lpgjrb4m4" },
      { id: "_bk2pi6cwn", t: "Adult-Child", nextid: "_lpgjrb4m4" },
      { id: "_ir8zg9q5x", t: "Caregiver/Nurse", nextid: "_lpgjrb4m4" },
      { id: "_o2tcqun0c", t: "Attorney", nextid: "_lpgjrb4m4" },
      { id: "_zbqm3qzg5", t: "Friend", nextid: "_lpgjrb4m4" },
      { id: "_96oedhj08", t: "Child", nextid: "_lpgjrb4m4" },
    ],
  },
  {
    id: "_lpgjrb4m4",
    prompt: "Is the person there with you?",
    answers: [
      { id: "_ijafuo7u5", t: "yes", nextid: "_0yeq2cw4r" },
      { id: "_68m95n7do", t: "no", nextid: "_njqf9ptei" },
    ],
  },
  {
    id: "_0yeq2cw4r",
    prompt: "Are they able to answer you?",
    answers: [
      { id: "_u6y90evdi", t: "yes", nextid: "end" },
      { id: "_k0vleepuo", t: "no", nextid: "_njqf9ptei" },
    ],
  },
  {
    id: "_njqf9ptei",
    prompt: "Did they provide written answers?",
    answers: [
      { id: "_gwc6n95l1", t: "yes", nextid: "end" },
      { id: "_d1oqzeras", t: "no", nextid: "_f9sdlo17g" },
    ],
  },
  {
    id: "_f9sdlo17g",
    prompt: "Are you answering how you think they would answer?",
    answers: [
      { id: "_wkihm1fjz", t: "yes", nextid: "end" },
      { id: "_s6bvmk138", t: "hoping", nextid: "end" },
    ],
  },
];
function App() {
  const [activeTab, setActiveTab] = useState("view"); // 'view' or 'new'
  const [viewActive, setViewActive] = useState(false);
  const {
    title: viewTitle,
    setTitle: setViewTitle,
    questions: viewQuestions,
    selectedNode: viewSelectedNode,
    collapsedQuestions: viewCollapsedQuestions,
    savedJson: viewSavedJson,
    handleQuestionChange: handleViewQuestionChange,
    handleAnswerChange: handleViewAnswerChange,
    handleNextQuestionChange: handleViewNextQuestionChange,
    addQuestion: addViewQuestion,
    addAnswer: addViewAnswer,
    deleteQuestion: deleteViewQuestion,
    deleteAnswer: deleteViewAnswer,
    toggleCollapse: toggleViewCollapse,
    handleNodeClick: handleViewNodeClick,
    setSavedJson: setViewSavedJson,
  } = useQuestions(initialQuestions, "Wellness Question Tree");

  const {
    title: newTitle,
    setTitle: setNewTitle,
    questions: newQuestions,
    selectedNode: newSelectedNode,
    collapsedQuestions: newCollapsedQuestions,
    savedJson: newSavedJson,
    handleQuestionChange: handleNewQuestionChange,
    handleAnswerChange: handleNewAnswerChange,
    handleNextQuestionChange: handleNewNextQuestionChange,
    addQuestion: addNewQuestion,
    addAnswer: addNewAnswer,
    deleteQuestion: deleteNewQuestion,
    deleteAnswer: deleteNewAnswer,
    toggleCollapse: toggleNewCollapse,
    handleNodeClick: handleNewNodeClick,
    setSavedJson: setNewSavedJson,
  } = useQuestions([], "New Question Tree");

  const { validationError, saveQuestions } = useValidation();
  const {
    nodes: viewNodes,
    edges: viewEdges,
    setNodes: setViewNodes,
    setEdges: setViewEdges,
  } = useTransform(viewQuestions);
  const {
    nodes: newNodes,
    edges: newEdges,
    setNodes: setNewNodes,
    setEdges: setNewEdges,
  } = useTransform(newQuestions);

  return (
    <div className="App">
      <h1>Question Tree Builder</h1>
      <div className="tabs">
        <button
          className={activeTab === "view" ? "active" : ""}
          onClick={() => {
            setActiveTab("view");
            setViewActive(false);
          }}
        >
          View Question Tree
        </button>
        <button
          className={activeTab === "new" ? "active" : ""}
          onClick={() => {
            setActiveTab("new");
            setViewActive(false);
          }}
        >
          New Question Tree
        </button>
      </div>
      {activeTab === "view" && (
        <>
        <strong>Question Tree List</strong>
          <p onClick={() => setViewActive(true)} className="pointer">
            Wellness Question Tree</p>
          {viewActive && (
            <div className="view-tab">
              <input
                type="text"
                placeholder="Enter tree title"
                value={viewTitle}
                onChange={(e) => setViewTitle(e.target.value)}
                className="title-input"
              />
              <QuestionForm
                questions={viewQuestions}
                handleQuestionChange={handleViewQuestionChange}
                handleAnswerChange={handleViewAnswerChange}
                handleNextQuestionChange={handleViewNextQuestionChange}
                addQuestion={addViewQuestion}
                addAnswer={addViewAnswer}
                deleteQuestion={deleteViewQuestion}
                deleteAnswer={deleteViewAnswer}
                toggleCollapse={toggleViewCollapse}
                collapsedQuestions={viewCollapsedQuestions}
              />
              <button
                onClick={() =>
                  saveQuestions(viewTitle, viewQuestions, setViewSavedJson)
                }
                className="save-btn"
              >
                Save Questions
              </button>
              {validationError && (
                <div className="error">{validationError}</div>
              )}
              {viewSavedJson && (
                <div>
                  <h2>Saved JSON</h2>
                  <pre>{viewSavedJson}</pre>
                </div>
              )}
              <TreeVisualization
                nodes={viewNodes}
                edges={viewEdges}
                onNodesChange={(changes) =>
                  setViewNodes((nds) => applyNodeChanges(changes, nds))
                }
                onEdgesChange={(changes) =>
                  setViewEdges((eds) => applyEdgeChanges(changes, eds))
                }
                onConnect={(params) =>
                  setViewEdges((eds) => addEdge(params, eds))
                }
                handleNodeClick={handleViewNodeClick}
              />
              {viewSelectedNode && (
                <EditForm
                  selectedNode={viewSelectedNode}
                  handleQuestionChange={handleViewQuestionChange}
                  handleAnswerChange={handleViewAnswerChange}
                  handleNextQuestionChange={handleViewNextQuestionChange}
                  questions={viewQuestions}
                />
              )}
            </div>
          )}
        </>
      )}
      {activeTab === "new" && (
        <div className="new-tab">
          <input
            type="text"
            placeholder="Enter tree title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="title-input"
          />
          <QuestionForm
            questions={newQuestions}
            handleQuestionChange={handleNewQuestionChange}
            handleAnswerChange={handleNewAnswerChange}
            handleNextQuestionChange={handleNewNextQuestionChange}
            addQuestion={addNewQuestion}
            addAnswer={addNewAnswer}
            deleteQuestion={deleteNewQuestion}
            deleteAnswer={deleteNewAnswer}
            toggleCollapse={toggleNewCollapse}
            collapsedQuestions={newCollapsedQuestions}
          />
          <button
            onClick={() =>
              saveQuestions(newTitle, newQuestions, setNewSavedJson)
            }
            className="save-btn"
          >
            Save Questions
          </button>
          {validationError && <div className="error">{validationError}</div>}
          {newSavedJson && (
            <div>
              <h2>Saved JSON</h2>
              <pre>{newSavedJson}</pre>
            </div>
          )}
          <TreeVisualization
            nodes={newNodes}
            edges={newEdges}
            onNodesChange={(changes) =>
              setNewNodes((nds) => applyNodeChanges(changes, nds))
            }
            onEdgesChange={(changes) =>
              setNewEdges((eds) => applyEdgeChanges(changes, eds))
            }
            onConnect={(params) => setNewEdges((eds) => addEdge(params, eds))}
            handleNodeClick={handleNewNodeClick}
          />
          {newSelectedNode && (
            <EditForm
              selectedNode={newSelectedNode}
              handleQuestionChange={handleNewQuestionChange}
              handleAnswerChange={handleNewAnswerChange}
              handleNextQuestionChange={handleNewNextQuestionChange}
              questions={newQuestions}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
