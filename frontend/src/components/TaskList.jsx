import "../styles/task.css";
import API from "../api/axios";

export default function TaskList({ tasks, refresh }) {
  const updateStatus = async (id, status) => {
    await API.put(`/tasks/${id}`, { status });
    refresh();
  };

  if (!tasks.length) {
    return <p>No tasks assigned yet</p>;
  }

  return (
    <div className="task-section">
      <h3>Tasks</h3>

      {tasks.map((t) => (
        <div className={`task-card ${t.status}`} key={t._id}>
          <div className="task-info">
            <h4 className="task-title">{t.title}</h4>
            <p className="task-project">📁 {t.project?.name}</p>

            {t.assignedTo && (
              <div className="task-user">
                <span>{t.assignedTo.name}</span>
              </div>
            )}
          </div>

          <div className="task-actions">
            <select
              className="status-select"
              value={t.status}
              onChange={(e) => updateStatus(t._id, e.target.value)}
            >
              <option value="todo">Todo</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
}
