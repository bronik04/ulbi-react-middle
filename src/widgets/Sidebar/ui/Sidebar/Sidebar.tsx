import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher ";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed(prevState => !prevState);
    };

return (
    <aside
        className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
        <button onClick={onToggle}>toggle</button>
        <div className={classNames(cls.switchers)}>
            <ThemeSwitcher/>
            {/* Language Switcher */}
        </div>
    </aside>
);
}
