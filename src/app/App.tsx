import React, {Suspense} from 'react';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemePrivider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {useTranslation} from "react-i18next";

const App = () => {
    const {theme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>
                <main className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </main>
            </Suspense>
        </div>
    );
};

export default App;
