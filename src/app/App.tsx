import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "Pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "Pages/MainPage/MainPage.async";
import {useTheme} from "app/providers/ThemePrivider";
import {classNames} from "helpers/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app',{}, [theme])}>
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
