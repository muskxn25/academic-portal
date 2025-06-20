import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginStudent() {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentId) {
      setError('Please enter your Student ID.');
      return;
    }
    // Simulate login
    navigate('/college-dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8 w-full max-w-md flex flex-col gap-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">Student Login</h1>
        <input
          type="text"
          placeholder="Student ID"
          value={studentId}
          onChange={e => setStudentId(e.target.value)}
          className="rounded-md border border-gray-300 px-4 py-3 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="rounded-md border border-gray-300 px-4 py-3 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
        {error && <div className="text-red-600 text-sm text-center">{error}</div>}
        <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md px-6 py-3 transition">Login</button>
      </form>
    </div>
  );
} 