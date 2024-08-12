// src/App.js
import { useState, useEffect } from "react";
import "reactflow/dist/style.css";
import "./App.css";
import QuestionForm from "./components/QuestionForm";
import TreeVisualization from "./components/TreeVisualization";
import EditForm from "./components/EditForm";
import { useQuestions } from "./hooks/useQuestions";
import { useValidation } from "./hooks/useValidation";
import { useTransform } from "./hooks/useTransform";
import { applyNodeChanges, applyEdgeChanges, addEdge } from "reactflow";
function App() {
  const [activeTab, setActiveTab] = useState("view");
  const [allQuestionTrees, setAllQuestionTrees] = useState([]);
  const [selectedTreeId, setSelectedTreeId] = useState(null);
  const fetchAllQuestionTrees = async () => {
    const response = await fetch(
      "https://tabi-core.azurewebsites.net/api/questionTree"
    );
    if (response.ok) {
      const data = await response.json();
      setAllQuestionTrees(data.questions); // Store the fetched question trees
    } else {
      console.error("Failed to fetch question trees");
    }
  };
  useEffect(() => {
    if (activeTab === "view") {
      fetchAllQuestionTrees(); // Fetch all question trees
    }
  }, [activeTab]);
  const handleSelectTree = async (treeId) => {
    setSelectedTreeId(treeId);
    await fetchQuestionTree(treeId); // Fetch and display the selected question tree
  };
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
    fetchQuestionTree,
    saveQuestionsToDb: saveViewQuestionsToDb,
  } = useQuestions([], "");

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
    saveQuestionsToDb: saveNewQuestionsToDb,
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
          }}
        >
          View Question Tree
        </button>
        <button
          className={activeTab === "new" ? "active" : ""}
          onClick={() => {
            setActiveTab("new");
          }}
        >
          New Question Tree
        </button>
      </div>
      {activeTab === "view" && (
        <>
          <strong>Question Tree List</strong>
          <ul>
            {allQuestionTrees.map((tree) => (
              <li key={tree.id} onClick={() => handleSelectTree(tree.id)}>
                {tree.title}
              </li>
            ))}
          </ul>
          {selectedTreeId ? (
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
                onClick={() => {
                  saveQuestions(viewTitle, viewQuestions, setViewSavedJson);
                  saveViewQuestionsToDb();
                }}
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
          ) : (
            <p>Please select a question tree to view its details.</p>
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
            onClick={() => {
              saveQuestions(newTitle, newQuestions, setNewSavedJson);
              saveNewQuestionsToDb();
            }}
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
