// hooks/useTransform.js
import { useEffect, useState } from "react";
import {
  transformQuestionsToNodes,
  transformQuestionsToEdges,
} from "../utils/transform";

export function useTransform(questions) {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    const transformedNodes = transformQuestionsToNodes(questions);
    const transformedEdges = transformQuestionsToEdges(questions);
    setNodes(transformedNodes);
    setEdges(transformedEdges);
  }, [questions]);

  return { nodes, edges, setNodes, setEdges };
}
