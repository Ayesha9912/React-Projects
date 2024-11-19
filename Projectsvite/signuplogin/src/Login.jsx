import React, { useState } from 'react';

export default function LogIn({ onLogIn, onError }){
  const [formData, setFormData] = useState({ email: '', password: '' });
  const handleChange = (e) =>{
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('signUpData'));
    if (storedData && storedData.email === formData.email && storedData.password === formData.password) {
      onLogIn(storedData.username);
    } else{
      onError('Incorrect email or password');
    }
  };
  return(
    <div className="login-form bg-white p-4 rounded-md shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
}
