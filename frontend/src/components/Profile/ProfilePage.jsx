import { useState } from 'react';
import './ProfilePage.css';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const apiUrl = `http://localhost:5000/api/auth/${isSignUp ? 'register' : 'login'}`;

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.msg || `HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      if (data.token) {
        localStorage.setItem('token', data.token);
        alert('Authentication successful!');
      } else {
        setErrorMessage(data.msg || 'Authentication failed!');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-background">
        <img src="https://img.freepik.com/free-vector/intelligent-plaster-concept_1284-14605.jpg?t=st=1731395108~exp=1731398708~hmac=0a966fb0f2b48d3e92e339cad099c74386722c63ad0c449f0cdfd018bcdca4a0&w=740" alt="Background Illustration" />
      </div>
      <div className="auth-form">
        <h2>{isSignUp ? 'Create an Account' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div>
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">
            {isSignUp ? 'Create Account' : 'Login'}
          </button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="checkbox-container">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">I agree to the terms of service</label>
        </div>

        <p>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            className="toggle-button"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? 'Login' : 'Create an Account'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
