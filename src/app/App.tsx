import React, {Suspense} from 'react';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemePrivider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {useTranslation} from "react-i18next";

const Component = () => {
   const {t, i18n} = useTranslation();

   const toggle = () => {
       i18n.changeLanguage(i18n.language === 'en'? 'ru' : 'en');
   }

   return <div>
       <button onClick={toggle}> {t('Перевод')}</button>
       {t('Тестовый пример')}
   </div>
}

const App = () => {
    const {theme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>
                <Component/>
                <main className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </main>
            </Suspense>
        </div>
    );
};

export default App;
