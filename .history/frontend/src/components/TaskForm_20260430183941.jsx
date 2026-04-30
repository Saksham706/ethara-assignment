import "../styles/forms.css";
import { useState, useEffect } from "react";
import API from "../api/axios";

export default function TaskForm({ projects, refresh }) {
  const [title, setTitle] = useState("");
  const [project, setProject] = useState("");
  const [users, setUsers] = useState([]);
  const [assignedTo, setAssignedTo] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await API.get("/users");
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  const submit = async () => {
    if (!title || !project || !assignedTo) return;

    await API.post("/tasks", {
      title,
      project,
      assignedTo,
    });

    setTitle("");
    refresh();
  };

  return (
    <div className="form-card">
  <h3>Create Task</h3>

  <div className="form-row">
    <input
      placeholder="Task title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

    <select onChange={(e) => setProject(e.target.value)}>
      <option value="">Select Project</option>
      {projects.map((p) => (
        <option key={p._id} value={p._id}>
          {p.name}
        </option>
      ))}
    </select>

    <select onChange={(e) => setAssignedTo(e.target.value)}>
      <option value="">Assign User</option>
      {users
  .filter((u) => u.role === "member")
  .map((u) => (
    <option key={u._id} value={u._id}>
      {u.name}
    </option>
))}
    </select>

    <button onClick={submit}>Create Task</button>
  </div>
</div>
  );
}