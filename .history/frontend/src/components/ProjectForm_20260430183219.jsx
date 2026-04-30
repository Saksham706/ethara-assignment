import "../styles/forms.css";
import { useState } from "react";
import API from "../api/axios";

export default function ProjectForm({ refresh }) {
  const [name, setName] = useState("");

  const submit = async () => {
    if (!name) return;
    await API.post("/projects", { name });
    setName("");
    refresh();
  };

  return (
    <div className="form-card">
  <h3>Create Project</h3>

  <div className="form-row">
    <input 
      placeholder="Project name"
      value={name} 
      onChange={(e)=>setName(e.target.value)} 
    />
    <button onClick={submit}>Create</button>
  </div>
</div>
  );
}