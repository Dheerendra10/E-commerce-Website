// src/components/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }

    try {
      // Dummy API for authentication (replace with actual API)
    //   const response = await axios.post("https://dummyjson.com/auth/login", {
    //     username: email, // Assuming API accepts username instead of email
    //     password,
    //   });      
       // If successful, store token in local storage and redirect to home page
    //   console.log("ffhh" , response.data.token);
    // localStorage.setItem('token', 'your_token_here');
      localStorage.setItem("authToken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...");

      // Redirect to the home page or product page
      navigate("/products");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Login</h2>
        {error && <p style={styles.error}>{error}</p>}

        <div style={styles.inputGroup}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  form: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "300px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "95%",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "0.9em",
    marginBottom: "10px",
  },
};

export default Login;
