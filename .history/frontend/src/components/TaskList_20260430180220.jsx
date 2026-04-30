import "../styles/task.css";
import API from "../api/axios";

export default function TaskList({ tasks, refresh }) {
  const updateStatus = async (id, status) => {
    await API.put(`/tasks/${id}`, { status });
    refresh();
  };

  return (
    <div className="task-section">
      <h3>Tasks</h3>

      {tasks.map(t => (
        <div className="task-card" key={t._id}>
          <span>{t.title}</span>

          <select
            value={t.status}
            onChange={(e)=>updateStatus(t._id, e.target.value)}
          >
            <option value="todo">Todo</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      ))}
    </div>
  );
}