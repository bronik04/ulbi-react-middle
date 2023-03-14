import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <header className={classNames(cls.navbar, {}, [className])}>
        <nav className={cls.links}>
            <AppLink to="/" theme={AppLinkTheme.SECONDARY}>Главная</AppLink>
            <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>О нас</AppLink>
        </nav>
    </header>
);
