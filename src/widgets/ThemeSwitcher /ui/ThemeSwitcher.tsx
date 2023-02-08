import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import {useTheme} from "app/providers/ThemePrivider";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {toggleTheme} = useTheme();

    return (
        <button
            className={classNames(cls.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
           Toggle
        </button>
    );
}
