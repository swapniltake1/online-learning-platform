import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LogIn from './components/LogIn'; // Updated import statement
import SignUp from './components/SignUp';
import VideoList from './components/VideoList';


const App = () => {
  return (

    
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/"      element={<LogIn />} />
          <Route exact path="/login" element={<LogIn/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/viewallcourses" element={<VideoList/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
