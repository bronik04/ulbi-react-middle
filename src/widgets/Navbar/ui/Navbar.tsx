import React from 'react';
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => (
    <header className={classNames(cls.Navbar, {}, [className])}>
        <nav className={cls.links}>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О нас</Link>
        </nav>
    </header>
);
