import '../css/App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage';
import PageHeader from './PageHeader';
import PageFooter from "./PageFooter";

const App = () => {
    return (
        <Router>
            <div>
                <PageHeader/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    {/* Add more routes for other pages */}
                </Routes>
                <PageFooter/>
            </div>
        </Router>
    );
};

export default App;
