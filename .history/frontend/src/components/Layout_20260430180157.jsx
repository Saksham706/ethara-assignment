import "../styles/layout.css";
import { useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="layout">
      <div className="sidebar">
        <h2>Task Manager</h2>
        <p>{user?.role}</p>
      </div>

      <div className="main">
        <div className="topbar">
          <span>Dashboard</span>
          <button onClick={logout}>Logout</button>
        </div>

        <div className="content">{children}</div>
      </div>
    </div>
  );
}