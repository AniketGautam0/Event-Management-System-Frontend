//import React from 'react';
import './style.css'; 

export default function Home() {
  return (
    <div className="home-container">
      <div className="admin-section">
        <h3>Admin</h3>
        <ul>
          <li>Admin Login</li>
          <li>Add Task </li>
          <li>View/Delete Task </li>
          <li>View Task</li>
          
          
        </ul>
      </div>
      
      <div className="customer-section">
        <h3>User</h3>
        <ul>
          <li>Registration</li>
          <li>User Login</li>
          <li>View Profile</li>
          <li>Book a Task</li>
          <li>View Booked Tasks</li>
        </ul>
      </div>
    </div>
  );
}