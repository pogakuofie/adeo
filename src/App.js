import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { adeoApi } from './store';

// pages
import { Home, Course } from './pages';

function App() {
    return (
        <ApiProvider api={adeoApi}>
            <Router>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Course />} path="/course" />
                </Routes>
            </Router>
        </ApiProvider>
    );
}

export default App;
