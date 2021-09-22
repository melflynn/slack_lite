import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Welcome to Slack-Lite!</h1>

    <nav>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  </div>
)

export default HomePage;