import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EmployerLoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState(''); // State to store user details
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      if (response.data.message === 'Login successful') {
        setUser(response.data.user); // Store user details
        // navigate("/kabcah1"); // Navigate to the user profile page on success
        navigate("/kabcah1", { state: { user: response.data.user } });
      }
    } catch (error) {
      setError("Invalid username or password");
      console.error("Login error:", error);
    }
  };

  const handleForgotPassword = () => {
    navigate("/ForgetPassword"); // Navigate to the ForgetPassword page
  };
  return (
    <>
      <div className="employer-login-form">
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="employer-inputfield">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Type your username here..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="employer-inputfield">
            <label htmlFor="password">Password</label>
            <div style={{ position: "relative" }}>
              <input
                type={passwordShown ? "text" : "password"}
                id="password"
                placeholder="Type your password here..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingRight: "30px" }}
              />
              <span
                onClick={togglePasswordVisibility}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {passwordShown ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="employer-login-btns">
            <a href="#" className='employerloginbtn' onClick={handleSubmit}> Login  </a>
             <a href="#" className="employerforgotbtn" onClick={handleForgotPassword}> Forgot password? </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default EmployerLoginForm;
