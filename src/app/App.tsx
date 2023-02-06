import React from 'react';
import './styles/index.scss'
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemePrivider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app',{}, [theme])}>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О нас</Link>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <AppRouter/>
        </div>
    );
};

export default App;
