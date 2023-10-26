import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LogIn from './components/LogIn'; // Updated import statement
import SignUp from './components/SignUp';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path="/login" element={<LogIn/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
