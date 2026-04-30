import "../styles/dashboard.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="navbar">
      <h2>Task Manager</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}