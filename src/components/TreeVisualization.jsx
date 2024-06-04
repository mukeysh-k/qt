// components/TreeVisualization.js
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";

function TreeVisualization({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
  handleNodeClick,
}) {
  return (
    <div className="tree-container">
      <h2>Question Tree Visualization</h2>
      <div id="treeWrapper" style={{ width: "100%", height: "80vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={handleNodeClick}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
}

export default TreeVisualization;
