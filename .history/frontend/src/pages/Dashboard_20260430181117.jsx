import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProjectForm from "../components/ProjectForm";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import API from "../api/axios";

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

      <TaskList tasks={filteredTasks} refresh={fetchData} />
    </Layout>
  );
}