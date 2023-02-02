import React from 'react';
import Counter from './counter';
import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import AboutPage from "../Pages/AboutPage/AboutPage";
import MainPage from "../Pages/MainPage/MainPage";

const App = () => {
    return (
        <div className='app'>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О нас</Link>
            <Routes>
                <Route path={'/about'} element={<AboutPage />}/>
                <Route path={'/'} element={<MainPage />}/>
            </Routes>
        </div>
    );
};

export default App;
