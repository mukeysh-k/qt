// hooks/useQuestions.js
import { useState, useEffect } from "react";
import { generateId } from "../utils/idGenerator";
import {
  transformQuestionsToNodes,
  transformQuestionsToEdges,
} from "../utils/transform";

export function useQuestions(initialQuestions, initialTitle = "") {
  const [title, setTitle] = useState(initialTitle);
  const [questions, setQuestions] = useState(initialQuestions);
  const [nodes, setNodes] = useState(
    transformQuestionsToNodes(initialQuestions)
  );
  const [edges, setEdges] = useState(
    transformQuestionsToEdges(initialQuestions)
  );
  const [selectedNode, setSelectedNode] = useState(null);
  const [collapsedQuestions, setCollapsedQuestions] = useState({});
  const [savedJson, setSavedJson] = useState(null);

  useEffect(() => {
    const transformedNodes = transformQuestionsToNodes(questions);
    const transformedEdges = transformQuestionsToEdges(questions);
    setNodes(transformedNodes);
    setEdges(transformedEdges);
  }, [questions]);

  const handleQuestionChange = (e, questionId) => {
    const newQuestions = questions.map((question) =>
      question.id === questionId
        ? { ...question, prompt: e.target.value }
        : question
    );
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (e, questionId, answerId) => {
    const newQuestions = questions.map((question) =>
      question.id === questionId
        ? {
            ...question,
            answers: question.answers.map((answer) =>
              answer.id === answerId ? { ...answer, t: e.target.value } : answer
            ),
          }
        : question
    );
    setQuestions(newQuestions);
  };

  const handleNextQuestionChange = (e, questionId, answerId) => {
    const newQuestions = questions.map((question) =>
      question.id === questionId
        ? {
            ...question,
            answers: question.answers.map((answer) =>
              answer.id === answerId
                ? { ...answer, nextid: e.target.value }
                : answer
            ),
          }
        : question
    );
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: generateId(),
        prompt: "",
        answers: [{ id: generateId(), t: "", nextid: "" }],
      },
    ]);
  };

  const addAnswer = (questionId) => {
    const newQuestions = questions.map((question) =>
      question.id === questionId
        ? {
            ...question,
            answers: [
              ...question.answers,
              { id: generateId(), t: "", nextid: "" },
            ],
          }
        : question
    );
    setQuestions(newQuestions);
  };

  const deleteQuestion = (questionId) => {
    setQuestions(questions.filter((question) => question.id !== questionId));
  };

  const deleteAnswer = (questionId, answerId) => {
    const newQuestions = questions.map((question) =>
      question.id === questionId
        ? {
            ...question,
            answers: question.answers.filter(
              (answer) => answer.id !== answerId
            ),
          }
        : question
    );
    setQuestions(newQuestions);
  };

  const toggleCollapse = (questionId) => {
    setCollapsedQuestions((prevState) => ({
      ...prevState,
      [questionId]: !prevState[questionId],
    }));
  };

  const handleNodeClick = (event, node) => {
    const question = questions.find((q) => q.id === node.id);
    setSelectedNode(question);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const importedQuestions = JSON.parse(e.target.result);
      setQuestions(importedQuestions.questions);
    };
    reader.readAsText(file);
  };

  const fetchQuestionTree = async (id) => {
    const response = await fetch(
      `https://tabi-core.azurewebsites.net/api/questionTree/${id}`
    );
    if (response.ok) {
      const data = await response.json();
      setQuestions(data.question.questions);
      setTitle(data.question.title);
    } else {
      console.error("Failed to fetch question tree");
    }
  };

  const saveQuestionsToDb = async () => {
    const questionTree = { title, questions };
    const response = await fetch(
      "https://tabi-core.azurewebsites.net/api/questionTree",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(questionTree),
      }
    );

    if (!response.ok) {
      console.error("Failed to save question tree");
    }
  };

  return {
    title,
    setTitle,
    questions,
    nodes,
    edges,
    selectedNode,
    collapsedQuestions,
    savedJson,
    handleQuestionChange,
    handleAnswerChange,
    handleNextQuestionChange,
    addQuestion,
    addAnswer,
    deleteQuestion,
    deleteAnswer,
    toggleCollapse,
    handleNodeClick,
    handleFileUpload,
    setSavedJson,
    fetchQuestionTree,
    saveQuestionsToDb
  };
}
