import "../styles/forms.css";
import { useState, useEffect } from "react";
import API from "../api/axios";

export default function ProjectForm({ refresh }) {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [members, setMembers] = useState([]);

  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await API.get("/users");
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  // Toggle member selection
  const handleMemberChange = (id) => {
    setMembers((prev) =>
      prev.includes(id)
        ? prev.filter((m) => m !== id)
        : [...prev, id]
    );
  };

  const submit = async () => {
    if (!name) return;

    await API.post("/projects", {
      name,
      members, // ✅ sending members
    });

    setName("");
    setMembers([]);
    refresh();
  };

  return (
    <div className="form-card">
      <h3>Create Project</h3>

      <div className="form-row">
        <input
          placeholder="Project name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={submit}>Create</button>
      </div>

      <div className="members-box">
        <p>Select Members:</p>

        {users.map((u) => (
          <label key={u._id}>
            <input
              type="checkbox"
              checked={members.includes(u._id)}
              onChange={() => handleMemberChange(u._id)}
            />
            {u.name} ({u.role})
          </label>
        ))}
      </div>
    </div>
  );
}