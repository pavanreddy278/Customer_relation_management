import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Tasks from './components/Tasks';
import SupportTicket from './components/SupportTicket';
import Sales from './components/Sales';

function App() {
  return (
    <Router>
      <div>
        <div className="blank"></div>
        <NavBar />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/support-ticket" element={<SupportTicket />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
