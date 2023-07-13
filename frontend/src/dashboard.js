import React from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get('username');

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      {/* Other dashboard content */}
    </div>
  );
};

export default Dashboard;
