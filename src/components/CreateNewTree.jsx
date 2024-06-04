// components/CreateNewTree.js
import { useState } from "react";

function CreateNewTree({ createNewTree }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTree(title);
  };

  return (
    <div className="create-new-tree">
      <h2>Create New Question Tree</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter tree title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateNewTree;
