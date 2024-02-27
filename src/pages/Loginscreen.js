import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLogin } from '../components/LoginContext';

function Loginscreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {login}=useLogin(); 
 
  function handleLogin() {
    const validEmail = 'nihal';
    const validPassword = 'nihal123';

    if (email === validEmail && password === validPassword) {
      login(); 
      navigate('/login/admin'); 
      

    } else {
      setError('Invalid email or password.');
    }
  }
  const handleGoBack = () => {
    // Navigate back to the previous page
    navigate(-1);
    };
  return (
    <div className="row justify-content-center mt-5" data-aos="zoom-in">
      <div className="bs">
        <h1 className="login-header">Login</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="login-error">{error}</p>}
        <button className="btn btn-primary mt-3" onClick={handleLogin}>
          Login
        </button>
        <span> </span>
            <button className="btn btn-dark mt-3" onClick={handleGoBack}>
             Back
            </button>
      </div>
    </div>
  );
}

export default Loginscreen;