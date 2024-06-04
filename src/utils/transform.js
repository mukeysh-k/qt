// utils/transform.js
export function transformQuestionsToNodes(questions) {
  const nodes = [];
  const levels = {};

  function positionNode(node, level) {
    if (!levels[level]) {
      levels[level] = [];
    }
    levels[level].push(node);
    node.position = { x: levels[level].length * 300, y: level * 200 };
  }

  questions.forEach((question) => {
    const node = {
      id: question.id,
      data: { label: question.prompt },
      position: { x: 0, y: 0 },
    };
    positionNode(node, 0);
    nodes.push(node);
  });

  const endNode = {
    id: "end",
    data: { label: "Thank you for the information" },
    position: { x: 200, y: (Object.keys(levels).length + 1) * 200 },
  };
  nodes.push(endNode);

  return nodes;
}

export function transformQuestionsToEdges(questions) {
  const edges = [];

  questions.forEach((question) => {
    question.answers.forEach((answer) => {
      if (answer.nextid !== "end") {
        edges.push({
          id: `${answer.id}-${answer.nextid}`,
          source: question.id,
          target: answer.nextid,
          label: answer.t,
        });
      } else {
        edges.push({
          id: `${answer.id}-end`,
          source: question.id,
          target: "end",
          label: answer.t,
        });
      }
    });
  });

  return edges;
}
