import React, { useState } from 'react';

function ByEmail() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log(`Email submitted: ${email}`);
    setMessage('If an account with that email exists, you will receive a password reset link.');
  };

  const containerStyle = {
    backgroundColor: '#fff',
    padding: '20px 40px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
  };

  const bodyStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: '0',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const messageStyle = {
    marginTop: '20px',
    color: 'green',
  };

  return (
    <div style={bodyStyle}>
      <div style={containerStyle}>
        <h1>Forgot Your Password?</h1>
        <p>Enter your email address below and we'll send you a link to reset your password.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            style={inputStyle}
          />
          <button
            type="submit"
            style={{ ...buttonStyle }}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
          >
            Send Reset Link
          </button>
        </form>
        {message && <p style={messageStyle}>{message}</p>}
      </div>
    </div>
  );
}

export default ByEmail;
