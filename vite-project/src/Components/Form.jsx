import React, { useState } from 'react';

const RegisterForm = ({ image }) => {
  const [formData, setFormData] = useState({
    username: '',    
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, confirmPassword } = formData;

    if (!username || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setSuccess('Registration successful!');
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-700">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        
        
        {image && (
          <div className="flex justify-center mb-6">
            <img 
              src={image} 
              alt="Logo" 
              className="w-24 h-24 object-contain"
            />
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Username</label>
            <input 
              type="text" 
              name="username" 
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword" 
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

          <button 
            type="submit" 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl"
          >
            Create account
            
          </button>
          
         

        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
