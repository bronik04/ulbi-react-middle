import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher ";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => (
    <header className={classNames(cls.navbar, {}, [className])}>
        <ThemeSwitcher/>
        <nav className={cls.links}>
            <AppLink to='/' theme={AppLinkTheme.SECONDARY}>Главная</AppLink>
            <AppLink to='/about' theme={AppLinkTheme.SECONDARY}>О нас</AppLink>
        </nav>
    </header>
);

