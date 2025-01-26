"use client"
import { useState } from 'react';

export default function RequestForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('');

    const formData = { name, email, message };

    try {
      const res = await fetch('/api/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Your request has been submitted successfully!');
      } else {
        setStatus(`Error: ${data.message || 'Something went wrong'}`);
      }
    } catch (error) {
      setStatus('Error: Unable to submit your request');
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Request Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            required
          />
        </div>

        {status && (
          <p className={`text-center text-sm mt-2 ${status.startsWith('Error') ? 'text-red-600' : 'text-green-600'}`}>{status}</p>
        )}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
