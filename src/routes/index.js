import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const RouterPage = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default RouterPage;
