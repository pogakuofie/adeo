import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import { Home, Course, Result } from './pages';

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Course />} path="/course" />
                <Route element={<Result />} path="/result" />
            </Routes>
        </Router>
    );
}

export default App;
