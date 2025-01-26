// components/Sidebar.js

import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="flex flex-col bg-gray-800 text-white w-64 h-screen">
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </div>
      <nav className="mt-4">
        <ul>
          <li>
            <Link href="/dashboard">
              <a className="block py-2 px-4 hover:bg-gray-700">Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="/users">
              <a className="block py-2 px-4 hover:bg-gray-700">Users</a>
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <a className="block py-2 px-4 hover:bg-gray-700">Settings</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// pages/dashboard.js

import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-blue-500 p-4 rounded-lg shadow-lg text-white">
            <h3 className="text-xl">Total Users</h3>
            <p className="text-4xl">1,250</p>
          </div>
          <div className="bg-green-500 p-4 rounded-lg shadow-lg text-white">
            <h3 className="text-xl">Active Users</h3>
            <p className="text-4xl">980</p>
          </div>
          <div className="bg-yellow-500 p-4 rounded-lg shadow-lg text-white">
            <h3 className="text-xl">New Signups</h3>
            <p className="text-4xl">50</p>
          </div>
        </div>
      </main>
    </div>
  );
}
