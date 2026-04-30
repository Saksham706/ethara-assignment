import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProjectForm from "../components/ProjectForm";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import API from "../api/axios";
import "../styles/task.css";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const fetchData = async () => {
    const p = await API.get("/projects");
    const t = await API.get("/tasks");

    setProjects(p.data);
    setTasks(t.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredTasks =
    user.role === "admin"
      ? tasks
      : tasks.filter(
          (t) => t.assignedTo && t.assignedTo._id === user._id
        );

  return (
    <Layout>
      {user.role === "admin" && (
        <>
          <ProjectForm refresh={fetchData} />
          <TaskForm projects={projects} refresh={fetchData} />
        </>
      )}

      {/* 🔥 PROJECT LIST WITH MEMBERS */}
      <div className="project-section">
        <h3>Projects</h3>

        {projects.length === 0 ? (
          <p>No projects yet</p>
        ) : (
          projects.map((p) => (
            <div key={p._id} className="project-card">
              <h4>{p.name}</h4>

              <p><strong>Members:</strong></p>
              <ul>
                {p.members?.length > 0 ? (
                  p.members.map((m) => (
                    <li key={m._id}>{m.name}</li>
                  ))
                ) : (
                  <li>No members</li>
                )}
              </ul>
            </div>
          ))
        )}
      </div>

      {/* TASKS */}
      <TaskList tasks={filteredTasks} refresh={fetchData} />
    </Layout>
  );
}