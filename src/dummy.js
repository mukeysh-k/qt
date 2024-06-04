// // src/App.js
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [questions, setQuestions] = useState([
//     {
//       id: generateId(),
//       prompt: "Are you answering for yourself or someone else?",
//       answers: [
//         { id: generateId(), t: "Myself", nextid: "" },
//         { id: generateId(), t: "Someone else", nextid: "" },
//       ],
//     },
//   ]);

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

//   function handleNextIdChange(e, questionId, answerId) {
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

//   return (
//     <div className="App">
//       <h1>Question Tree Builder</h1>
//       {questions.map((question) => (
//         <div key={question.id} className="question">
//           <input
//             type="text"
//             placeholder="Enter question prompt"
//             value={question.prompt}
//             onChange={(e) => handleQuestionChange(e, question.id)}
//           />
//           <button onClick={() => deleteQuestion(question.id)}>
//             Delete Question
//           </button>
//           {question.answers.map((answer) => (
//             <div key={answer.id} className="answer">
//               <input
//                 type="text"
//                 placeholder="Enter answer text"
//                 value={answer.t}
//                 onChange={(e) => handleAnswerChange(e, question.id, answer.id)}
//               />
//               <select
//                 value={answer.nextid}
//                 onChange={(e) => handleNextIdChange(e, question.id, answer.id)}
//               >
//                 <option value="">Select next question</option>
//                 {questions.map((q) => (
//                   <option key={q.id} value={q.id}>
//                     {q.prompt}
//                   </option>
//                 ))}
//               </select>
//               <button onClick={() => deleteAnswer(question.id, answer.id)}>
//                 Delete Answer
//               </button>
//             </div>
//           ))}
//           <button onClick={() => addAnswer(question.id)}>Add Answer</button>
//         </div>
//       ))}
//       <button onClick={addQuestion}>Add Question</button>
//     </div>
//   );
// }

// export default App;

// src/App.js
// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [questions, setQuestions] = useState([
//     {
//       id: generateId(),
//       prompt: 'Are you answering for yourself or someone else?',
//       answers: [
//         { id: generateId(), t: 'Myself', nextid: '' },
//         { id: generateId(), t: 'Someone else', nextid: '' },
//       ],
//     },
//     {
//       id: generateId(),
//       prompt: 'How are you related to the person?',
//       answers: [
//         { id: generateId(), t: 'Spouse', nextid: '' },
//         { id: generateId(), t: 'Adult-Child', nextid: '' },
//         { id: generateId(), t: 'Caregiver/Nurse', nextid: '' },
//         { id: generateId(), t: 'Attorney', nextid: '' },
//         { id: generateId(), t: 'Friend', nextid: '' },
//         { id: generateId(), t: 'Child', nextid: '' },
//       ],
//     },
//   ]);

//   function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
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
//               answer.id === answerId ? { ...answer, nextid: e.target.value } : answer
//             ),
//           }
//         : question
//     );
//     setQuestions(newQuestions);
//   }

//   function addQuestion() {
//     setQuestions([
//       ...questions,
//       { id: generateId(), prompt: '', answers: [{ id: generateId(), t: '', nextid: '' }] },
//     ]);
//   }

//   function addAnswer(questionId) {
//     const newQuestions = questions.map((question) =>
//       question.id === questionId
//         ? {
//             ...question,
//             answers: [
//               ...question.answers,
//               { id: generateId(), t: '', nextid: '' },
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
//             answers: question.answers.filter((answer) => answer.id !== answerId),
//           }
//         : question
//     );
//     setQuestions(newQuestions);
//   }

//   return (
//     <div className="App">
//       <h1>Question Tree Builder</h1>
//       {questions.map((question) => (
//         <div key={question.id} className="question">
//           <input
//             type="text"
//             placeholder="Enter question prompt"
//             value={question.prompt}
//             onChange={(e) => handleQuestionChange(e, question.id)}
//           />
//           <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
//           {question.answers.map((answer) => (
//             <div key={answer.id} className="answer">
//               <input
//                 type="text"
//                 placeholder="Enter answer text"
//                 value={answer.t}
//                 onChange={(e) => handleAnswerChange(e, question.id, answer.id)}
//               />
//               <select
//                 value={answer.nextid}
//                 onChange={(e) => handleNextQuestionChange(e, question.id, answer.id)}
//               >
//                 <option value="">Select next question</option>
//                 {questions.map((q) => (
//                   <option key={q.id} value={q.id}>
//                     {q.prompt}
//                   </option>
//                 ))}
//               </select>
//               <button onClick={() => deleteAnswer(question.id, answer.id)}>Delete Answer</button>
//             </div>
//           ))}
//           <button onClick={() => addAnswer(question.id)}>Add Answer</button>
//         </div>
//       ))}
//       <button onClick={addQuestion}>Add Question</button>
//     </div>
//   );
// }

// export default App;

// src/App.js
// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [questions, setQuestions] = useState([
//     {
//       id: generateId(),
//       prompt: 'Are you answering for yourself or someone else?',
//       answers: [
//         { id: generateId(), t: 'Myself', nextid: '' },
//         { id: generateId(), t: 'Someone else', nextid: '' },
//       ],
//     },
//     {
//       id: generateId(),
//       prompt: 'How are you related to the person?',
//       answers: [
//         { id: generateId(), t: 'Spouse', nextid: '' },
//         { id: generateId(), t: 'Adult-Child', nextid: '' },
//         { id: generateId(), t: 'Caregiver/Nurse', nextid: '' },
//         { id: generateId(), t: 'Attorney', nextid: '' },
//         { id: generateId(), t: 'Friend', nextid: '' },
//         { id: generateId(), t: 'Child', nextid: '' },
//       ],
//     },
//   ]);

//   const [savedJson, setSavedJson] = useState(null);

//   function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
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
//               answer.id === answerId ? { ...answer, nextid: e.target.value } : answer
//             ),
//           }
//         : question
//     );
//     setQuestions(newQuestions);
//   }

//   function addQuestion() {
//     setQuestions([
//       ...questions,
//       { id: generateId(), prompt: '', answers: [{ id: generateId(), t: '', nextid: '' }] },
//     ]);
//   }

//   function addAnswer(questionId) {
//     const newQuestions = questions.map((question) =>
//       question.id === questionId
//         ? {
//             ...question,
//             answers: [
//               ...question.answers,
//               { id: generateId(), t: '', nextid: '' },
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
//             answers: question.answers.filter((answer) => answer.id !== answerId),
//           }
//         : question
//     );
//     setQuestions(newQuestions);
//   }

//   function saveQuestions() {
//     setSavedJson(JSON.stringify({ questions }, null, 2));
//   }

//   return (
//     <div className="App">
//       <h1>Question Tree Builder</h1>
//       {questions.map((question) => (
//         <div key={question.id} className="question">
//           <input
//             type="text"
//             placeholder="Enter question prompt"
//             value={question.prompt}
//             onChange={(e) => handleQuestionChange(e, question.id)}
//           />
//           <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
//           {question.answers.map((answer) => (
//             <div key={answer.id} className="answer">
//               <input
//                 type="text"
//                 placeholder="Enter answer text"
//                 value={answer.t}
//                 onChange={(e) => handleAnswerChange(e, question.id, answer.id)}
//               />
//               <select
//                 value={answer.nextid}
//                 onChange={(e) => handleNextQuestionChange(e, question.id, answer.id)}
//               >
//                 <option value="">Select next question</option>
//                 {questions.map((q) => (
//                   <option key={q.id} value={q.id}>
//                     {q.prompt}
//                   </option>
//                 ))}
//               </select>
//               <button onClick={() => deleteAnswer(question.id, answer.id)}>Delete Answer</button>
//             </div>
//           ))}
//           <button onClick={() => addAnswer(question.id)}>Add Answer</button>
//         </div>
//       ))}
//       <button onClick={addQuestion}>Add Question</button>
//       <button onClick={saveQuestions}>Save Questions</button>
//       {savedJson && (
//         <div>
//           <h2>Saved JSON</h2>
//           <pre>{savedJson}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
// src/App.js
// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [questions, setQuestions] = useState([
//     {
//       id: generateId(),
//       prompt: 'Are you answering for yourself or someone else?',
//       answers: [
//         { id: generateId(), t: 'Myself', nextid: '' },
//         { id: generateId(), t: 'Someone else', nextid: '' },
//       ],
//     },
//     {
//       id: generateId(),
//       prompt: 'How are you related to the person?',
//       answers: [
//         { id: generateId(), t: 'Spouse', nextid: '' },
//         { id: generateId(), t: 'Adult-Child', nextid: '' },
//         { id: generateId(), t: 'Caregiver/Nurse', nextid: '' },
//         { id: generateId(), t: 'Attorney', nextid: '' },
//         { id: generateId(), t: 'Friend', nextid: '' },
//         { id: generateId(), t: 'Child', nextid: '' },
//       ],
//     },
//   ]);

//   const [savedJson, setSavedJson] = useState(null);
//   const [validationError, setValidationError] = useState('');

//   function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
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
//               answer.id === answerId ? { ...answer, nextid: e.target.value } : answer
//             ),
//           }
//         : question
//     );
//     setQuestions(newQuestions);
//   }

//   function addQuestion() {
//     setQuestions([
//       ...questions,
//       { id: generateId(), prompt: '', answers: [{ id: generateId(), t: '', nextid: '' }] },
//     ]);
//   }

//   function addAnswer(questionId) {
//     const newQuestions = questions.map((question) =>
//       question.id === questionId
//         ? {
//             ...question,
//             answers: [
//               ...question.answers,
//               { id: generateId(), t: '', nextid: '' },
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
//             answers: question.answers.filter((answer) => answer.id !== answerId),
//           }
//         : question
//     );
//     setQuestions(newQuestions);
//   }

//   function validateQuestions() {
//     for (let question of questions) {
//       if (!question.prompt.trim()) {
//         return 'All question prompts must be filled out.';
//       }
//       for (let answer of question.answers) {
//         if (!answer.t.trim()) {
//           return 'All answer texts must be filled out.';
//         }
//       }
//     }
//     return '';
//   }

//   function saveQuestions() {
//     const error = validateQuestions();
//     if (error) {
//       setValidationError(error);
//       return;
//     }
//     setValidationError('');
//     setSavedJson(JSON.stringify({ questions }, null, 2));
//   }

//   return (
//     <div className="App">
//       <h1>Question Tree Builder</h1>
//       {questions.map((question) => (
//         <div key={question.id} className="question">
//           <input
//             type="text"
//             placeholder="Enter question prompt"
//             value={question.prompt}
//             onChange={(e) => handleQuestionChange(e, question.id)}
//           />
//           <button onClick={() => deleteQuestion(question.id)}>Delete Question</button>
//           {question.answers.map((answer) => (
//             <div key={answer.id} className="answer">
//               <input
//                 type="text"
//                 placeholder="Enter answer text"
//                 value={answer.t}
//                 onChange={(e) => handleAnswerChange(e, question.id, answer.id)}
//               />
//               <select
//                 value={answer.nextid}
//                 onChange={(e) => handleNextQuestionChange(e, question.id, answer.id)}
//               >
//                 <option value="">Select next question</option>
//                 {questions.map((q) => (
//                   <option key={q.id} value={q.id}>
//                     {q.prompt}
//                   </option>
//                 ))}
//                 <option value="end">Thank you for the information</option>
//               </select>
//               <button onClick={() => deleteAnswer(question.id, answer.id)}>Delete Answer</button>
//             </div>
//           ))}
//           <button onClick={() => addAnswer(question.id)}>Add Answer</button>
//         </div>
//       ))}
//       <button onClick={addQuestion}>Add Question</button>
//       <button onClick={saveQuestions}>Save Questions</button>
//       {validationError && <div className="error">{validationError}</div>}
//       {savedJson && (
//         <div>
//           <h2>Saved JSON</h2>
//           <pre>{savedJson}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
// src/App.js
// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [questions, setQuestions] = useState([
//     {
//       id: generateId(),
//       prompt: 'Are you answering for yourself or someone else?',
//       answers: [
//         { id: generateId(), t: 'Myself', nextid: '' },
//         { id: generateId(), t: 'Someone else', nextid: '' },
//       ],
//     },
//     {
//       id: generateId(),
//       prompt: 'How are you related to the person?',
//       answers: [
//         { id: generateId(), t: 'Spouse', nextid: '' },
//         { id: generateId(), t: 'Adult-Child', nextid: '' },
//         { id: generateId(), t: 'Caregiver/Nurse', nextid: '' },
//         { id: generateId(), t: 'Attorney', nextid: '' },
//         { id: generateId(), t: 'Friend', nextid: '' },
//         { id: generateId(), t: 'Child', nextid: '' },
//       ],
//     },
//   ]);

//   const [savedJson, setSavedJson] = useState(null);
//   const [validationError, setValidationError] = useState('');

//   function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
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
//               answer.id === answerId ? { ...answer, nextid: e.target.value } : answer
//             ),
//           }
//         : question
//     );
//     setQuestions(newQuestions);
//   }

//   function addQuestion() {
//     setQuestions([
//       ...questions,
//       { id: generateId(), prompt: '', answers: [{ id: generateId(), t: '', nextid: '' }] },
//     ]);
//   }

//   function addAnswer(questionId) {
//     const newQuestions = questions.map((question) =>
//       question.id === questionId
//         ? {
//             ...question,
//             answers: [
//               ...question.answers,
//               { id: generateId(), t: '', nextid: '' },
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
//             answers: question.answers.filter((answer) => answer.id !== answerId),
//           }
//         : question
//     );
//     setQuestions(newQuestions);
//   }

//   function validateQuestions() {
//     for (let question of questions) {
//       if (!question.prompt.trim()) {
//         return 'All question prompts must be filled out.';
//       }
//       for (let answer of question.answers) {
//         if (!answer.t.trim()) {
//           return 'All answer texts must be filled out.';
//         }
//       }
//     }
//     return '';
//   }

//   function saveQuestions() {
//     const error = validateQuestions();
//     if (error) {
//       setValidationError(error);
//       return;
//     }
//     setValidationError('');
//     setSavedJson(JSON.stringify({ questions }, null, 2));
//   }

//   function renderQuestions(questions, level = 0) {
//     return questions.map((question) => (
//       <div key={question.id} className="question" style={{ marginLeft: `${level * 20}px` }}>
//         <input
//           type="text"
//           placeholder="Enter question prompt"
//           value={question.prompt}
//           onChange={(e) => handleQuestionChange(e, question.id)}
//           className="prompt-input"
//         />
//         <button onClick={() => deleteQuestion(question.id)} className="delete-btn">Delete Question</button>
//         {question.answers.map((answer) => (
//           <div key={answer.id} className="answer">
//             <input
//               type="text"
//               placeholder="Enter answer text"
//               value={answer.t}
//               onChange={(e) => handleAnswerChange(e, question.id, answer.id)}
//               className="answer-input"
//             />
//             <select
//               value={answer.nextid}
//               onChange={(e) => handleNextQuestionChange(e, question.id, answer.id)}
//               className="nextid-select"
//             >
//               <option value="">Select next question</option>
//               {questions.map((q) => (
//                 <option key={q.id} value={q.id}>
//                   {q.prompt}
//                 </option>
//               ))}
//               <option value="end">Thank you for the information</option>
//             </select>
//             <button onClick={() => deleteAnswer(question.id, answer.id)} className="delete-btn">Delete Answer</button>
//           </div>
//         ))}
//         <button onClick={() => addAnswer(question.id)} className="add-btn">Add Answer</button>
//         {question.answers.some(answer => answer.nextid) && renderQuestions(questions.filter(q => question.answers.map(a => a.nextid).includes(q.id)), level + 1)}
//       </div>
//     ));
//   }

//   return (
//     <div className="App">
//       <h1>Question Tree Builder</h1>
//       {renderQuestions(questions)}
//       <button onClick={addQuestion} className="add-btn">Add Question</button>
//       <button onClick={saveQuestions} className="save-btn">Save Questions</button>
//       {validationError && <div className="error">{validationError}</div>}
//       {savedJson && (
//         <div>
//           <h2>Saved JSON</h2>
//           <pre>{savedJson}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// src/App.js
// src/App.js
// src/App.js
// src/App.js
// import { useState, useEffect } from 'react';
// import Tree from 'react-d3-tree';
// import './App.css';

// function App() {
//   const [questions, setQuestions] = useState([
//     {
//       id: generateId(),
//       prompt: 'Are you answering for yourself or someone else?',
//       answers: [
//         { id: generateId(), t: 'Myself', nextid: '' },
//         { id: generateId(), t: 'Someone else', nextid: '' },
//       ],
//     },
//     {
//       id: generateId(),
//       prompt: 'How are you related to the person?',
//       answers: [
//         { id: generateId(), t: 'Spouse', nextid: '' },
//         { id: generateId(), t: 'Adult-Child', nextid: '' },
//         { id: generateId(), t: 'Caregiver/Nurse', nextid: '' },
//         { id: generateId(), t: 'Attorney', nextid: '' },
//         { id: generateId(), t: 'Friend', nextid: '' },
//         { id: generateId(), t: 'Child', nextid: '' },
//       ],
//     },
//   ]);

//   const [savedJson, setSavedJson] = useState(null);
//   const [validationError, setValidationError] = useState('');
//   const [treeData, setTreeData] = useState([]);

//   useEffect(() => {
//     const transformedData = transformDataToTree(questions);
//     setTreeData(transformedData);
//     console.log('Transformed Tree Data:', transformedData);
//   }, [questions]);

//   function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
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
// function transformDataToTree(data) {
//   const idToNodeMap = {};
//   const rootNodes = [];

//   // Create a map of all nodes
//   data.forEach((question) => {
//     idToNodeMap[question.id] = { name: question.prompt, children: [] };
//   });

//   // Link children to their respective parents
//   data.forEach((question) => {
//     question.answers.forEach((answer) => {
//       if (answer.nextid && answer.nextid !== "end") {
//         const childNode = idToNodeMap[answer.nextid];
//         if (childNode) {
//           idToNodeMap[question.id].children.push({
//             name: answer.t,
//             children: [childNode],
//           });
//         } else {
//           idToNodeMap[question.id].children.push({
//             name: answer.t,
//             children: [],
//           });
//         }
//       } else if (answer.nextid === "end") {
//         idToNodeMap[question.id].children.push({
//           name: `${answer.t} -> Thank you for the information`,
//           children: [],
//         });
//       } else {
//         idToNodeMap[question.id].children.push({
//           name: answer.t,
//           children: [],
//         });
//       }
//     });
//   });

//   // Identify root nodes (nodes that are not children of any other node)
//   const childNodeIds = new Set(
//     data.flatMap((question) => question.answers.map((answer) => answer.nextid))
//   );
//   data.forEach((question) => {
//     if (!childNodeIds.has(question.id)) {
//       rootNodes.push(idToNodeMap[question.id]);
//     }
//   });

//   // Ensure at least one root node exists
//   if (rootNodes.length === 0 && data.length > 0) {
//     rootNodes.push(idToNodeMap[data[0].id]);
//   }

//   return rootNodes;
// }

//   function handleNextQuestionChange(e, questionId, answerId) {
//     const newQuestions = questions.map((question) =>
//       question.id === questionId
//         ? {
//             ...question,
//             answers: question.answers.map((answer) =>
//               answer.id === answerId ? { ...answer, nextid: e.target.value } : answer
//             ),
//           }
//         : question
//     );
//     setQuestions(newQuestions);
//   }

//   function addQuestion() {
//     setQuestions([
//       ...questions,
//       { id: generateId(), prompt: '', answers: [{ id: generateId(), t: '', nextid: '' }] },
//     ]);
//   }

//   function addAnswer(questionId) {
//     const newQuestions = questions.map((question) =>
//       question.id === questionId
//         ? {
//             ...question,
//             answers: [
//               ...question.answers,
//               { id: generateId(), t: '', nextid: '' },
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
//             answers: question.answers.filter((answer) => answer.id !== answerId),
//           }
//         : question
//     );
//     setQuestions(newQuestions);
//   }

//   function validateQuestions() {
//     for (let question of questions) {
//       if (!question.prompt.trim()) {
//         return 'All question prompts must be filled out.';
//       }
//       for (let answer of question.answers) {
//         if (!answer.t.trim()) {
//           return 'All answer texts must be filled out.';
//         }
//       }
//     }
//     return '';
//   }

//   function saveQuestions() {
//     const error = validateQuestions();
//     if (error) {
//       setValidationError(error);
//       return;
//     }
//     setValidationError('');
//     setSavedJson(JSON.stringify({ questions }, null, 2));
//   }

//   return (
//     <div className="App">
//       <h1>Question Tree Builder</h1>
//       <div className="builder">
//         {questions.map((question) => (
//           <div key={question.id} className="question">
//             <input
//               type="text"
//               placeholder="Enter question prompt"
//               value={question.prompt}
//               onChange={(e) => handleQuestionChange(e, question.id)}
//               className="prompt-input"
//             />
//             <button onClick={() => deleteQuestion(question.id)} className="delete-btn">Delete Question</button>
//             {question.answers.map((answer) => (
//               <div key={answer.id} className="answer">
//                 <input
//                   type="text"
//                   placeholder="Enter answer text"
//                   value={answer.t}
//                   onChange={(e) => handleAnswerChange(e, question.id, answer.id)}
//                   className="answer-input"
//                 />
//                 <select
//                   value={answer.nextid}
//                   onChange={(e) => handleNextQuestionChange(e, question.id, answer.id)}
//                   className="nextid-select"
//                 >
//                   <option value="">Select next question</option>
//                   {questions.map((q) => (
//                     <option key={q.id} value={q.id}>
//                       {q.prompt}
//                     </option>
//                   ))}
//                   <option value="end">Thank you for the information</option>
//                 </select>
//                 <button onClick={() => deleteAnswer(question.id, answer.id)} className="delete-btn">Delete Answer</button>
//               </div>
//             ))}
//             <button onClick={() => addAnswer(question.id)} className="add-btn">Add Answer</button>
//           </div>
//         ))}
//         <button onClick={addQuestion} className="add-btn">Add Question</button>
//         <button onClick={saveQuestions} className="save-btn">Save Questions</button>
//         {validationError && <div className="error">{validationError}</div>}
//         {savedJson && (
//           <div>
//             <h2>Saved JSON</h2>
//             <pre>{savedJson}</pre>
//           </div>
//         )}
//       </div>
//       <div className="tree-container">
//         <h2>Question Tree Visualization</h2>
//         <div id="treeWrapper" style={{ width: '100%', height: '500px' }}>
//           {treeData.length > 0 && <Tree data={treeData} orientation="vertical" />}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// src/App.js
// import { useState, useEffect } from 'react';
// import Tree from 'react-d3-tree';
// import './App.css';

// function App() {
//   const [questions, setQuestions] = useState([
//     {
//       id: generateId(),
//       prompt: "Are you answering for yourself or someone else?",
//       answers: [
//         { id: generateId(), t: "Myself", nextid: "" },
//         { id: generateId(), t: "Someone else", nextid: "" },
//       ],
//     },
//     {
//       id: generateId(),
//       prompt: "How are you related to the person?",
//       answers: [
//         { id: generateId(), t: "Spouse", nextid: "" },
//         { id: generateId(), t: "Adult-Child", nextid: "" },
//         { id: generateId(), t: "Caregiver/Nurse", nextid: "" },
//         { id: generateId(), t: "Attorney", nextid: "" },
//         { id: generateId(), t: "Friend", nextid: "" },
//         { id: generateId(), t: "Child", nextid: "" },
//       ],
//     },
//   ]);

//   const [savedJson, setSavedJson] = useState(null);
//   const [validationError, setValidationError] = useState("");
//   const [treeData, setTreeData] = useState([]);
//   const [selectedNode, setSelectedNode] = useState(null);

//   useEffect(() => {
//     const transformedData = transformDataToTree(questions);
//     setTreeData(transformedData);
//   }, [questions]);

//   function generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   }

//   function transformDataToTree(data) {
//     const idToNodeMap = {};
//     const rootNodes = [];

//     // Create a map of all nodes
//     data.forEach((question) => {
//       idToNodeMap[question.id] = { name: question.prompt, children: [] };
//     });

//     // Link children to their respective parents
//     data.forEach((question) => {
//       question.answers.forEach((answer) => {
//         if (answer.nextid && answer.nextid !== "end") {
//           const childNode = idToNodeMap[answer.nextid];
//           if (childNode) {
//             idToNodeMap[question.id].children.push({
//               name: answer.t,
//               children: [childNode],
//             });
//           } else {
//             idToNodeMap[question.id].children.push({
//               name: answer.t,
//               children: [],
//             });
//           }
//         } else if (answer.nextid === "end") {
//           idToNodeMap[question.id].children.push({
//             name: `${answer.t} -> Thank you for the information`,
//             children: [],
//           });
//         } else {
//           idToNodeMap[question.id].children.push({
//             name: answer.t,
//             children: [],
//           });
//         }
//       });
//     });

//     // Identify root nodes (nodes that are not children of any other node)
//     const childNodeIds = new Set(
//       data.flatMap((question) => question.answers.map((answer) => answer.nextid))
//     );
//     data.forEach((question) => {
//       if (!childNodeIds.has(question.id)) {
//         rootNodes.push(idToNodeMap[question.id]);
//       }
//     });

//     // Ensure at least one root node exists
//     if (rootNodes.length === 0 && data.length > 0) {
//       rootNodes.push(idToNodeMap[data[0].id]);
//     }

//     return rootNodes;
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

//   function handleNodeClick(nodeData) {
//     const question = questions.find((q) => q.prompt === nodeData.name);
//     setSelectedNode(question);
//   }

//   function handleFileUpload(event) {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const importedQuestions = JSON.parse(e.target.result);
//       setQuestions(importedQuestions.questions);
//     };
//     reader.readAsText(file);
//   }

//   function downloadJSON(data, filename = "questions.json") {
//     const jsonStr = JSON.stringify(data, null, 2);
//     const blob = new Blob([jsonStr], { type: "application/json" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = filename;
//     a.click();
//     URL.revokeObjectURL(url);
//   }

//   return (
//     <div className="App">
//       <h1>Question Tree Builder</h1>
//       <div className="builder">
//         {questions.map((question) => (
//           <div key={question.id} className="question">
//             <input
//               type="text"
//               placeholder="Enter question prompt"
//               value={question.prompt}
//               onChange={(e) => handleQuestionChange(e, question.id)}
//               className="prompt-input"
//             />
//             <button
//               onClick={() => deleteQuestion(question.id)}
//               className="delete-btn"
//             >
//               Delete Question
//             </button>
//             {question.answers.map((answer) => (
//               <div key={answer.id} className="answer">
//                 <input
//                   type="text"
//                   placeholder="Enter answer text"
//                   value={answer.t}
//                   onChange={(e) =>
//                     handleAnswerChange(e, question.id, answer.id)
//                   }
//                   className="answer-input"
//                 />
//                 <select
//                   value={answer.nextid}
//                   onChange={(e) =>
//                     handleNextQuestionChange(e, question.id, answer.id)
//                   }
//                   className="nextid-select"
//                 >
//                   <option value="">Select next question</option>
//                   {questions.map((q) => (
//                     <option key={q.id} value={q.id}>
//                       {q.prompt}
//                     </option>
//                   ))}
//                   <option value="end">Thank you for the information</option>
//                 </select>
//                 <button
//                   onClick={() => deleteAnswer(question.id, answer.id)}
//                   className="delete-btn"
//                 >
//                   Delete Answer
//                 </button>
//               </div>
//             ))}
//             <button onClick={() => addAnswer(question.id)} className="add-btn">
//               Add Answer
//             </button>
//           </div>
//         ))}
//         <button onClick={addQuestion} className="add-btn">
//           Add Question
//         </button>
//         <button onClick={saveQuestions} className="save-btn">
//           Save Questions
//         </button>
//         <button
//           onClick={() => downloadJSON({ questions })}
//           className="export-btn"
//         >
//           Export Questions
//         </button>
//         <input
//           type="file"
//           onChange={handleFileUpload}
//           className="import-input"
//         />
//         {validationError && <div className="error">{validationError}</div>}
//         {savedJson && (
//           <div>
//             <h2>Saved JSON</h2>
//             <pre>{savedJson}</pre>
//           </div>
//         )}
//       </div>
//       <div className="tree-container">
//         <h2>Question Tree Visualization</h2>
//         <div id="treeWrapper" style={{ width: "100%", height: "500px" }}>
//           {treeData.length > 0 && (
//             <Tree
//               data={treeData}
//               orientation="vertical"
//               onNodeClick={handleNodeClick}
//             />
//           )}
//         </div>
//       </div>
//       {selectedNode && (
//         <div className="edit-form">
//           <h3>Edit Question</h3>
//           <input
//             type="text"
//             placeholder="Edit question prompt"
//             value={selectedNode.prompt}
//             onChange={(e) => handleQuestionChange(e, selectedNode.id)}
//           />
//           {selectedNode.answers.map((answer) => (
//             <div key={answer.id} className="answer">
//               <input
//                 type="text"
//                 placeholder="Edit answer text"
//                 value={answer.t}
//                 onChange={(e) =>
//                   handleAnswerChange(e, selectedNode.id, answer.id)
//                 }
//               />
//               <select
//                 value={answer.nextid}
//                 onChange={(e) =>
//                   handleNextQuestionChange(e, selectedNode.id, answer.id)
//                 }
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
// import { useState, useEffect } from 'react';
// import Tree from 'react-d3-tree';
// import './App.css';

// function App() {
//   const [questions, setQuestions] = useState([
//     {
//       id: generateId(),
//       prompt: 'Are you answering for yourself or someone else?',
//       answers: [
//         { id: generateId(), t: 'Myself', nextid: '' },
//         { id: generateId(), t: 'Someone else', nextid: '' },
//       ],
//     },
//     {
//       id: generateId(),
//       prompt: 'How are you related to the person?',
//       answers: [
//         { id: generateId(), t: 'Spouse', nextid: '' },
//         { id: generateId(), t: 'Adult-Child', nextid: '' },
//         { id: generateId(), t: 'Caregiver/Nurse', nextid: '' },
//         { id: generateId(), t: 'Attorney', nextid: '' },
//         { id: generateId(), t: 'Friend', nextid: '' },
//         { id: generateId(), t: 'Child', nextid: '' },
//       ],
//     },
//   ]);

//   const [savedJson, setSavedJson] = useState(null);
//   const [validationError, setValidationError] = useState('');
//   const [treeData, setTreeData] = useState([]);
//   const [selectedNode, setSelectedNode] = useState(null);

//   useEffect(() => {
//     const transformedData = transformDataToTree(questions);
//     setTreeData(transformedData);
//   }, [questions]);

//     function transformDataToTree(data) {
//       const idToNodeMap = {};
//       const rootNodes = [];

//       // Create a map of all nodes
//       data.forEach((question) => {
//         idToNodeMap[question.id] = { name: question.prompt, children: [] };
//       });

//       // Link children to their respective parents
//       data.forEach((question) => {
//         question.answers.forEach((answer) => {
//           if (answer.nextid && answer.nextid !== "end") {
//             const childNode = idToNodeMap[answer.nextid];
//             if (childNode) {
//               idToNodeMap[question.id].children.push({
//                 name: answer.t,
//                 children: [childNode],
//               });
//             } else {
//               idToNodeMap[question.id].children.push({
//                 name: answer.t,
//                 children: [],
//               });
//             }
//           } else if (answer.nextid === "end") {
//             idToNodeMap[question.id].children.push({
//               name: `${answer.t} -> Thank you for the information`,
//               children: [],
//             });
//           } else {
//             idToNodeMap[question.id].children.push({
//               name: answer.t,
//               children: [],
//             });
//           }
//         });
//       });

//       // Identify root nodes (nodes that are not children of any other node)
//       const childNodeIds = new Set(
//         data.flatMap((question) =>
//           question.answers.map((answer) => answer.nextid)
//         )
//       );
//       data.forEach((question) => {
//         if (!childNodeIds.has(question.id)) {
//           rootNodes.push(idToNodeMap[question.id]);
//         }
//       });

//       // Ensure at least one root node exists
//       if (rootNodes.length === 0 && data.length > 0) {
//         rootNodes.push(idToNodeMap[data[0].id]);
//       }

//       return rootNodes;
//     }
//   function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
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
//               answer.id === answerId ? { ...answer, nextid: e.target.value } : answer
//             ),
//           }
//         : question
//     );
//     setQuestions(newQuestions);
//   }

//   function addQuestion() {
//     setQuestions([
//       ...questions,
//       { id: generateId(), prompt: '', answers: [{ id: generateId(), t: '', nextid: '' }] },
//     ]);
//   }

//   function addAnswer(questionId) {
//     const newQuestions = questions.map((question) =>
//       question.id === questionId
//         ? {
//             ...question,
//             answers: [
//               ...question.answers,
//               { id: generateId(), t: '', nextid: '' },
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
//             answers: question.answers.filter((answer) => answer.id !== answerId),
//           }
//         : question
//     );
//     setQuestions(newQuestions);
//   }

//   function validateQuestions() {
//     for (let question of questions) {
//       if (!question.prompt.trim()) {
//         return 'All question prompts must be filled out.';
//       }
//       for (let answer of question.answers) {
//         if (!answer.t.trim()) {
//           return 'All answer texts must be filled out.';
//         }
//       }
//     }
//     return '';
//   }

//   function saveQuestions() {
//     const error = validateQuestions();
//     if (error) {
//       setValidationError(error);
//       return;
//     }
//     setValidationError('');
//     setSavedJson(JSON.stringify({ questions }, null, 2));
//   }

//   function handleNodeClick(nodeData) {
//     const question = questions.find(q => q.prompt === nodeData.name);
//     setSelectedNode(question);
//   }

//   function handleFileUpload(event) {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const importedQuestions = JSON.parse(e.target.result);
//       setQuestions(importedQuestions.questions);
//     };
//     reader.readAsText(file);
//   }

//   function downloadJSON(data, filename = 'questions.json') {
//     const jsonStr = JSON.stringify(data, null, 2);
//     const blob = new Blob([jsonStr], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = filename;
//     a.click();
//     URL.revokeObjectURL(url);
//   }

//   return (
//     <div className="App">
//       <h1>Question Tree Builder</h1>
//       <div className="builder">
//         {questions.map((question) => (
//           <div key={question.id} className="question">
//             <input
//               type="text"
//               placeholder="Enter question prompt"
//               value={question.prompt}
//               onChange={(e) => handleQuestionChange(e, question.id)}
//               className="prompt-input"
//             />
//             <button onClick={() => deleteQuestion(question.id)} className="delete-btn">Delete Question</button>
//             {question.answers.map((answer) => (
//               <div key={answer.id} className="answer">
//                 <input
//                   type="text"
//                   placeholder="Enter answer text"
//                   value={answer.t}
//                   onChange={(e) => handleAnswerChange(e, question.id, answer.id)}
//                   className="answer-input"
//                 />
//                 <select
//                   value={answer.nextid}
//                   onChange={(e) => handleNextQuestionChange(e, question.id, answer.id)}
//                   className="nextid-select"
//                 >
//                   <option value="">Select next question</option>
//                   {questions.map((q) => (
//                     <option key={q.id} value={q.id}>
//                       {q.prompt}
//                     </option>
//                   ))}
//                   <option value="end">Thank you for the information</option>
//                 </select>
//                 <button onClick={() => deleteAnswer(question.id, answer.id)} className="delete-btn">Delete Answer</button>
//               </div>
//             ))}
//             <button onClick={() => addAnswer(question.id)} className="add-btn">Add Answer</button>
//           </div>
//         ))}
//         <button onClick={addQuestion} className="add-btn">Add Question</button>
//         <button onClick={saveQuestions} className="save-btn">Save Questions</button>
//         <button onClick={() => downloadJSON({ questions })} className="export-btn">Export Questions</button>
//         <input type="file" onChange={handleFileUpload} className="import-input" />
//         {validationError && <div className="error">{validationError}</div>}
//         {savedJson && (
//           <div>
//             <h2>Saved JSON</h2>
//             <pre>{savedJson}</pre>
//           </div>
//         )}
//       </div>
//       <div className="tree-container">
//         <h2>Question Tree Visualization</h2>
//         <div id="treeWrapper" style={{ width: '100%', height: '500px' }}>
//           {treeData.length > 0 && (
//             <Tree
//               data={treeData}
//               orientation="vertical"
//               onNodeClick={handleNodeClick}
//             />
//           )}
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
//                 onChange={(e) => handleAnswerChange(e, selectedNode.id, answer.id)}
//                 className="edit-input"
//               />
//               <label>Next Question</label>
//               <select
//                 value={answer.nextid}
//                 onChange={(e) => handleNextQuestionChange(e, selectedNode.id, answer.id)}
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
// import { useState, useEffect } from 'react';
// import Tree from 'react-d3-tree';
// import './App.css';

// function App() {
//   const [questions, setQuestions] = useState([
//     {
//       id: generateId(),
//       prompt: 'Are you answering for yourself or someone else?',
//       answers: [
//         { id: generateId(), t: 'Myself', nextid: '' },
//         { id: generateId(), t: 'Someone else', nextid: '' },
//       ],
//     },
//     {
//       id: generateId(),
//       prompt: 'How are you related to the person?',
//       answers: [
//         { id: generateId(), t: 'Spouse', nextid: '' },
//         { id: generateId(), t: 'Adult-Child', nextid: '' },
//         { id: generateId(), t: 'Caregiver/Nurse', nextid: '' },
//         { id: generateId(), t: 'Attorney', nextid: '' },
//         { id: generateId(), t: 'Friend', nextid: '' },
//         { id: generateId(), t: 'Child', nextid: '' },
//       ],
//     },
//   ]);

//   const [savedJson, setSavedJson] = useState(null);
//   const [validationError, setValidationError] = useState('');
//   const [treeData, setTreeData] = useState([]);
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [collapsedQuestions, setCollapsedQuestions] = useState({});

//   useEffect(() => {
//     const transformedData = transformDataToTree(questions);
//     setTreeData(transformedData);
//   }, [questions]);

//   function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   }

//   function toggleCollapse(questionId) {
//     setCollapsedQuestions((prevState) => ({
//       ...prevState,
//       [questionId]: !prevState[questionId],
//     }));
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
//               answer.id === answerId ? { ...answer, nextid: e.target.value } : answer
//             ),
//           }
//         : question
//     );
//     setQuestions(newQuestions);
//   }

//   function addQuestion() {
//     setQuestions([
//       ...questions,
//       { id: generateId(), prompt: '', answers: [{ id: generateId(), t: '', nextid: '' }] },
//     ]);
//   }

//   function addAnswer(questionId) {
//     const newQuestions = questions.map((question) =>
//       question.id === questionId
//         ? {
//             ...question,
//             answers: [
//               ...question.answers,
//               { id: generateId(), t: '', nextid: '' },
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
//             answers: question.answers.filter((answer) => answer.id !== answerId),
//           }
//         : question
//     );
//     setQuestions(newQuestions);
//   }

//   function validateQuestions() {
//     for (let question of questions) {
//       if (!question.prompt.trim()) {
//         return 'All question prompts must be filled out.';
//       }
//       for (let answer of question.answers) {
//         if (!answer.t.trim()) {
//           return 'All answer texts must be filled out.';
//         }
//       }
//     }
//     return '';
//   }

//   function saveQuestions() {
//     const error = validateQuestions();
//     if (error) {
//       setValidationError(error);
//       return;
//     }
//     setValidationError('');
//     setSavedJson(JSON.stringify({ questions }, null, 2));
//   }

//   function handleNodeClick(nodeData) {
//     const question = questions.find(q => q.prompt === nodeData.name);
//     setSelectedNode(question);
//   }

//   function handleFileUpload(event) {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const importedQuestions = JSON.parse(e.target.result);
//       setQuestions(importedQuestions.questions);
//     };
//     reader.readAsText(file);
//   }

//   function downloadJSON(data, filename = 'questions.json') {
//     const jsonStr = JSON.stringify(data, null, 2);
//     const blob = new Blob([jsonStr], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = filename;
//     a.click();
//     URL.revokeObjectURL(url);
//   }

//   function transformDataToTree(data) {
//     const idToNodeMap = {};
//     const rootNodes = [];

//     // Create a map of all nodes
//     data.forEach(question => {
//       idToNodeMap[question.id] = { name: question.prompt, children: [] };
//     });

//     // Link children to their respective parents
//     data.forEach(question => {
//       question.answers.forEach(answer => {
//         if (answer.nextid && answer.nextid !== 'end') {
//           const childNode = idToNodeMap[answer.nextid];
//           if (childNode) {
//             idToNodeMap[question.id].children.push({
//               name: answer.t,
//               children: [childNode],
//               _collapsed: true,
//             });
//           } else {
//             idToNodeMap[question.id].children.push({ name: answer.t, children: [], _collapsed: true });
//           }
//         } else if (answer.nextid === 'end') {
//           idToNodeMap[question.id].children.push({ name: `${answer.t} -> Thank you for the information`, children: [], _collapsed: true });
//         } else {
//           idToNodeMap[question.id].children.push({ name: answer.t, children: [], _collapsed: true });
//         }
//       });
//     });

//     // Identify root nodes (nodes that are not children of any other node)
//     const childNodeIds = new Set(data.flatMap(question => question.answers.map(answer => answer.nextid)));
//     data.forEach(question => {
//       if (!childNodeIds.has(question.id)) {
//         rootNodes.push(idToNodeMap[question.id]);
//       }
//     });

//     // Ensure at least one root node exists
//     if (rootNodes.length === 0 && data.length > 0) {
//       rootNodes.push(idToNodeMap[data[0].id]);
//     }

//     return rootNodes;
//   }

// return (
//   <div className="App">
//     <h1>Question Tree Builder</h1>
//     <div className="builder">
//       {questions.map((question) => (
//         <div key={question.id} className="question">
//           <div className="question-header">
//             <button
//               onClick={() => toggleCollapse(question.id)}
//               className="collapse-btn"
//             >
//               {collapsedQuestions[question.id] ? "+" : "-"}
//             </button>
//             <input
//               type="text"
//               placeholder="Enter question prompt"
//               value={question.prompt}
//               onChange={(e) => handleQuestionChange(e, question.id)}
//               className="prompt-input"
//             />
//             <button
//               onClick={() => deleteQuestion(question.id)}
//               className="delete-btn"
//             >
//               Delete Question
//             </button>
//           </div>
//           {!collapsedQuestions[question.id] && (
//             <div className="answers">
//               {question.answers.map((answer) => (
//                 <div key={answer.id} className="answer">
//                   <input
//                     type="text"
//                     placeholder="Enter answer text"
//                     value={answer.t}
//                     onChange={(e) =>
//                       handleAnswerChange(e, question.id, answer.id)
//                     }
//                     className="answer-input"
//                   />
//                   <select
//                     value={answer.nextid}
//                     onChange={(e) =>
//                       handleNextQuestionChange(e, question.id, answer.id)
//                     }
//                     className="nextid-select"
//                   >
//                     <option value="">Select next question</option>
//                     {questions.map((q) => (
//                       <option key={q.id} value={q.id}>
//                         {q.prompt}
//                       </option>
//                     ))}
//                     <option value="end">Thank you for the information</option>
//                   </select>
//                   <button
//                     onClick={() => deleteAnswer(question.id, answer.id)}
//                     className="delete-btn"
//                   >
//                     Delete Answer
//                   </button>
//                 </div>
//               ))}
//               <button
//                 onClick={() => addAnswer(question.id)}
//                 className="add-btn"
//               >
//                 Add Answer
//               </button>
//             </div>
//           )}
//         </div>
//       ))}
//       <button onClick={addQuestion} className="add-btn">
//         Add Question
//       </button>
//       <button onClick={saveQuestions} className="save-btn">
//         Save Questions
//       </button>
//       <button
//         onClick={() => downloadJSON({ questions })}
//         className="export-btn"
//       >
//         Export Questions
//       </button>
//       <input type="file" onChange={handleFileUpload} className="import-input" />
//       {validationError && <div className="error">{validationError}</div>}
//       {savedJson && (
//         <div>
//           <h2>Saved JSON</h2>
//           <pre>{savedJson}</pre>
//         </div>
//       )}
//     </div>
//     <div className="tree-container">
//       <h2>Question Tree Visualization</h2>
//       <div id="treeWrapper" style={{ width: "100%", height: "500px" }}>
//         {treeData.length > 0 && (
//           <Tree
//             data={treeData}
//             orientation="vertical"
//             onNodeClick={handleNodeClick}
//             collapsible
//             nodeSize={{ x: 300, y: 200 }} // Adjust node size
//             separation={{ siblings: 1, nonSiblings: 1.5 }} // Adjust separation
//           />
//         )}
//       </div>
//     </div>
//     {selectedNode && (
//       <div className="edit-form">
//         <h3>Edit Question</h3>
//         <div className="edit-group">
//           <label>Question Prompt</label>
//           <input
//             type="text"
//             placeholder="Edit question prompt"
//             value={selectedNode.prompt}
//             onChange={(e) => handleQuestionChange(e, selectedNode.id)}
//             className="edit-input"
//           />
//         </div>
//         {selectedNode.answers.map((answer) => (
//           <div key={answer.id} className="edit-group">
//             <label>Answer Text</label>
//             <input
//               type="text"
//               placeholder="Edit answer text"
//               value={answer.t}
//               onChange={(e) =>
//                 handleAnswerChange(e, selectedNode.id, answer.id)
//               }
//               className="edit-input"
//             />
//             <label>Next Question</label>
//             <select
//               value={answer.nextid}
//               onChange={(e) =>
//                 handleNextQuestionChange(e, selectedNode.id, answer.id)
//               }
//               className="edit-select"
//             >
//               <option value="">Select next question</option>
//               {questions.map((q) => (
//                 <option key={q.id} value={q.id}>
//                   {q.prompt}
//                 </option>
//               ))}
//               <option value="end">Thank you for the information</option>
//             </select>
//           </div>
//         ))}
//       </div>
//     )}
//   </div>
// );

// }

// export default App;
// src/App.js
// import { useState, useEffect } from 'react';
// import Tree from 'react-d3-tree';
// import './App.css';

// function App() {
//   const initialQuestions = [
//     {
//       id: generateId(),
//       prompt: 'Are you answering for yourself or someone else?',
//       answers: [
//         { id: generateId(), t: 'Myself', nextid: '' },
//         { id: generateId(), t: 'Someone else', nextid: '' },
//       ],
//     },
//     {
//       id: generateId(),
//       prompt: 'How are you related to the person?',
//       answers: [
//         { id: generateId(), t: 'Spouse', nextid: '' },
//         { id: generateId(), t: 'Adult-Child', nextid: '' },
//         { id: generateId(), t: 'Caregiver/Nurse', nextid: '' },
//         { id: generateId(), t: 'Attorney', nextid: '' },
//         { id: generateId(), t: 'Friend', nextid: '' },
//         { id: generateId(), t: 'Child', nextid: '' },
//       ],
//     },
//   ];

//   const newQuestions = [
//     {
//       id: "_erxxn1zco",
//       prompt: "Are you answering for yourself or someone else?",
//       answers: [
//         {
//           id: "_t6c3v3bk1",
//           t: "Myself",
//           nextid: "end"
//         },
//         {
//           id: "_dae09oac3",
//           t: "Someone else",
//           nextid: "_1koldj40o"
//         }
//       ]
//     },
//     {
//       id: "_1koldj40o",
//       prompt: "How are you related to the person?",
//       answers: [
//         {
//           id: "_svrps2yzo",
//           t: "Spouse",
//           nextid: "_lpgjrb4m4"
//         },
//         {
//           id: "_bk2pi6cwn",
//           t: "Adult-Child",
//           nextid: "_lpgjrb4m4"
//         },
//         {
//           id: "_ir8zg9q5x",
//           t: "Caregiver/Nurse",
//           nextid: "_lpgjrb4m4"
//         },
//         {
//           id: "_o2tcqun0c",
//           t: "Attorney",
//           nextid: "_lpgjrb4m4"
//         },
//         {
//           id: "_zbqm3qzg5",
//           t: "Friend",
//           nextid: "_lpgjrb4m4"
//         },
//         {
//           id: "_96oedhj08",
//           t: "Child",
//           nextid: "_lpgjrb4m4"
//         }
//       ]
//     },
//     {
//       id: "_lpgjrb4m4",
//       prompt: "Is the person there with you?",
//       answers: [
//         {
//           id: "_ijafuo7u5",
//           t: "yes",
//           nextid: "_0yeq2cw4r"
//         },
//         {
//           id: "_68m95n7do",
//           t: "no",
//           nextid: "_njqf9ptei"
//         }
//       ]
//     },
//     {
//       id: "_0yeq2cw4r",
//       prompt: "Are they able to answer you?",
//       answers: [
//         {
//           id: "_u6y90evdi",
//           t: "yes",
//           nextid: "end"
//         },
//         {
//           id: "_k0vleepuo",
//           t: "no",
//           nextid: "_njqf9ptei"
//         }
//       ]
//     },
//     {
//       id: "_njqf9ptei",
//       prompt: "Did they provide written answers?",
//       answers: [
//         {
//           id: "_gwc6n95l1",
//           t: "yes",
//           nextid: "end"
//         },
//         {
//           id: "_d1oqzeras",
//           t: "no",
//           nextid: "_f9sdlo17g"
//         }
//       ]
//     },
//     {
//       id: "_f9sdlo17g",
//       prompt: "Are you answering how you think they would answer?",
//       answers: [
//         {
//           id: "_wkihm1fjz",
//           t: "yes",
//           nextid: "end"
//         },
//         {
//           id: "_s6bvmk138",
//           t: "hoping",
//           nextid: "end"
//         }
//       ]
//     }
//   ];

//   const [questions, setQuestions] = useState(initialQuestions);
//   const [savedJson, setSavedJson] = useState(null);
//   const [validationError, setValidationError] = useState('');
//   const [treeData, setTreeData] = useState([]);
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [collapsedQuestions, setCollapsedQuestions] = useState({});

//   useEffect(() => {
//     const transformedData = transformDataToTree(questions);
//     setTreeData(transformedData);
//   }, [questions]);

//   function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
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
//               answer.id === answerId ? { ...answer, nextid: e.target.value } : answer
//             ),
//           }
//         : question
//     );
//     setQuestions(newQuestions);
//   }

//   function addQuestion() {
//     setQuestions([
//       ...questions,
//       { id: generateId(), prompt: '', answers: [{ id: generateId(), t: '', nextid: '' }] },
//     ]);
//   }

//   function addAnswer(questionId) {
//     const newQuestions = questions.map((question) =>
//       question.id === questionId
//         ? {
//             ...question,
//             answers: [
//               ...question.answers,
//               { id: generateId(), t: '', nextid: '' },
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
//             answers: question.answers.filter((answer) => answer.id !== answerId),
//           }
//         : question
//     );
//     setQuestions(newQuestions);
//   }

//   function validateQuestions() {
//     for (let question of questions) {
//       if (!question.prompt.trim()) {
//         return 'All question prompts must be filled out.';
//       }
//       for (let answer of question.answers) {
//         if (!answer.t.trim()) {
//           return 'All answer texts must be filled out.';
//         }
//       }
//     }
//     return '';
//   }

//   function saveQuestions() {
//     const error = validateQuestions();
//     if (error) {
//       setValidationError(error);
//       return;
//     }
//     setValidationError('');
//     setSavedJson(JSON.stringify({ questions }, null, 2));
//   }

//   function handleNodeClick(nodeData) {
//     const question = questions.find(q => q.prompt === nodeData.name);
//     setSelectedNode(question);
//   }

//   function handleFileUpload(event) {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const importedQuestions = JSON.parse(e.target.result);
//       setQuestions(importedQuestions.questions);
//     };
//     reader.readAsText(file);
//   }

//   function downloadJSON(data, filename = 'questions.json') {
//     const jsonStr = JSON.stringify(data, null, 2);
//     const blob = new Blob([jsonStr], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = filename;
//     a.click();
//     URL.revokeObjectURL(url);
//   }

//   function transformDataToTree(data) {
//     const idToNodeMap = {};
//     const rootNodes = [];

//     // Create a map of all nodes
//     data.forEach(question => {
//       idToNodeMap[question.id] = { name: question.prompt, children: [] };
//     });

//     // Link children to their respective parents
//     data.forEach(question => {
//       question.answers.forEach(answer => {
//         if (answer.nextid && answer.nextid !== 'end') {
//           const childNode = idToNodeMap[answer.nextid];
//           if (childNode) {
//             idToNodeMap[question.id].children.push({
//               name: answer.t,
//               children: [childNode],
//               _collapsed: true,
//             });
//           } else {
//             idToNodeMap[question.id].children.push({ name: answer.t, children: [], _collapsed: true });
//           }
//         } else if (answer.nextid === 'end') {
//           idToNodeMap[question.id].children.push({ name: `${answer.t} -> Thank you for the information`, children: [], _collapsed: true });
//         } else {
//           idToNodeMap[question.id].children.push({ name: answer.t, children: [], _collapsed: true });
//         }
//       });
//     });

//     // Identify root nodes (nodes that are not children of any other node)
//     const childNodeIds = new Set(data.flatMap(question => question.answers.map(answer => answer.nextid)));
//     data.forEach(question => {
//       if (!childNodeIds.has(question.id)) {
//         rootNodes.push(idToNodeMap[question.id]);
//       }
//     });

//     // Ensure at least one root node exists
//     if (rootNodes.length === 0 && data.length > 0) {
//       rootNodes.push(idToNodeMap[data[0].id]);
//     }

//     return rootNodes;
//   }

//   function reloadQuestions(newQuestions) {
//     setQuestions(newQuestions);
//   }

//   function toggleCollapse(questionId) {
//     setCollapsedQuestions(prevState => ({
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
//               <button onClick={() => toggleCollapse(question.id)} className="collapse-btn">
//                 {collapsedQuestions[question.id] ? '+' : '-'}
//               </button>
//               <input
//                 type="text"
//                 placeholder="Enter question prompt"
//                 value={question.prompt}
//                 onChange={(e) => handleQuestionChange(e, question.id)}
//                 className="prompt-input"
//               />
//               <button onClick={() => deleteQuestion(question.id)} className="delete-btn">Delete Question</button>
//             </div>
//             {!collapsedQuestions[question.id] && (
//               <div className="answers">
//                 {question.answers.map((answer) => (
//                   <div key={answer.id} className="answer">
//                     <input
//                       type="text"
//                       placeholder="Enter answer text"
//                       value={answer.t}
//                       onChange={(e) => handleAnswerChange(e, question.id, answer.id)}
//                       className="answer-input"
//                     />
//                     <select
//                       value={answer.nextid}
//                       onChange={(e) => handleNextQuestionChange(e, question.id, answer.id)}
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
//                     <button onClick={() => deleteAnswer(question.id, answer.id)} className="delete-btn">Delete Answer</button>
//                   </div>
//                 ))}
//                 <button onClick={() => addAnswer(question.id)} className="add-btn">Add Answer</button>
//               </div>
//             )}
//           </div>
//         ))}
//         <button onClick={addQuestion} className="add-btn">Add Question</button>
//         <button onClick={saveQuestions} className="save-btn">Save Questions</button>
//         <button onClick={() => downloadJSON({ questions })} className="export-btn">Export Questions</button>
//         <input type="file" onChange={handleFileUpload} className="import-input" />
//         {validationError && <div className="error">{validationError}</div>}
//         {savedJson && (
//           <div>
//             <h2>Saved JSON</h2>
//             <pre>{savedJson}</pre>
//           </div>
//         )}
//         <button onClick={() => reloadQuestions(newQuestions)} className="reload-btn">Reload Questions</button>
//       </div>
//       <div className="tree-container">
//         <h2>Question Tree Visualization</h2>
//         <div id="treeWrapper" style={{ width: '100%', height: '500px' }}>
//           {treeData.length > 0 && (
//             <Tree
//               data={treeData}
//               orientation="vertical"
//               onNodeClick={handleNodeClick}
//               collapsible
//               nodeSize={{ x: 300, y: 200 }} // Adjust node size
//               separation={{ siblings: 1, nonSiblings: 1.5 }} // Adjust separation
//             />
//           )}
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
//                 onChange={(e) => handleAnswerChange(e, selectedNode.id, answer.id)}
//                 className="edit-input"
//               />
//               <label>Next Question</label>
//               <select
//                 value={answer.nextid}
//                 onChange={(e) => handleNextQuestionChange(e, selectedNode.id, answer.id)}
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
