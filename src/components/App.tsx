import React, {Suspense} from 'react';
import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "../Pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "../Pages/MainPage/MainPage.async";

const App = () => {
    return (
        <div className='app'>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О нас</Link>
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
