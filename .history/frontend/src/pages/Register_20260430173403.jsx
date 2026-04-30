import "../styles/auth.css";
import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "member",
  });

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const { data } = await API.post("/auth/register", form);
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={submit}>
        <h2>Register</h2>
        <input placeholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})}/>
        <input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
        <input type="password" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})}/>
        <select onChange={(e)=>setForm({...form,role:e.target.value})}>
          <option value="member">Member</option>
          <option value="admin">Admin</option>
        </select>
        <button>Register</button>
      </form>
    </div>
  );
}