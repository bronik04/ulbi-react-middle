import React, {Suspense, useContext, useState} from 'react';
import '../styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "../Pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "../Pages/MainPage/MainPage.async";
import {Theme, ThemeContext} from "../theme/ThemeContext";

const App = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    function toggleTheme() {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    }
    return (
        <div className={`app ${theme}`}>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О нас</Link>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
