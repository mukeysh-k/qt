// hooks/useValidation.js
import { useState } from "react";
import { validateQuestions } from "../utils/validate";

export function useValidation() {
  const [validationError, setValidationError] = useState("");

  const saveQuestions = (title, questions, setSavedJson) => {
    const error = validateQuestions(questions);
    if (error) {
      setValidationError(error);
      return;
    }
    setValidationError("");
    setSavedJson(JSON.stringify({title, questions }, null, 2));
  };

  return { validationError, saveQuestions };
}
