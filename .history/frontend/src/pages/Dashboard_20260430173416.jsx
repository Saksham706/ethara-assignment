import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import ProjectForm from "../components/ProjectForm";
import TaskForm from "../components/TaskForm";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    const p = await API.get("/projects");
    const t = await API.get("/tasks");

    setProjects(p.data);
    setTasks(t.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container">
        <ProjectForm refresh={fetchData} />
        <TaskForm projects={projects} refresh={fetchData} />

        <h3>Projects</h3>
        {projects.map((p) => <div key={p._id}>{p.name}</div>)}

        <h3>Tasks</h3>
        {tasks.map((t) => (
          <div key={t._id}>{t.title} - {t.status}</div>
        ))}
      </div>
    </div>
  );
}