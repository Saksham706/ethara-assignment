import "../styles/forms.css";
import { useState } from "react";
import API from "../api/axios";

export default function TaskForm({ projects, refresh }) {
  const [title, setTitle] = useState("");
  const [project, setProject] = useState("");

  const submit = async () => {
    if (!title || !project) return;
    await API.post("/tasks", { title, project });
    setTitle("");
    refresh();
  };

  return (
    <div className="form-card">
      <h3>Create Task</h3>

      <input value={title} onChange={(e)=>setTitle(e.target.value)} />

      <select onChange={(e)=>setProject(e.target.value)}>
        <option value="">Select Project</option>
        {projects.map(p => (
          <option key={p._id} value={p._id}>{p.name}</option>
        ))}
      </select>

      <button onClick={submit}>Create</button>
    </div>
  );
}