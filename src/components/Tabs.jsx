// components/Tabs.js

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      <button
        className={`tab ${activeTab === "view" ? "active" : ""}`}
        onClick={() => setActiveTab("view")}
      >
        View Question Tree
      </button>
      <button
        className={`tab ${activeTab === "create" ? "active" : ""}`}
        onClick={() => setActiveTab("create")}
      >
        Create New
      </button>
    </div>
  );
}

export default Tabs;
