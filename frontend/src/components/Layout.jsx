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
      {/* Top Navbar */}
      <div className="topbar">
        <div className="topbar-left">
          <h2>Task Manager</h2>
        </div>

        <div className="topbar-right">
          <span className={`role ${user?.role}`}>
            {user?.role}
          </span>

          <button onClick={logout}>Logout</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="content">
        {children}
      </div>
    </div>
  );
}