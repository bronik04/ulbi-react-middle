import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher ";
import {LangSwitcher} from "widgets/LangSwitcher";
import {Button} from "shared/ui/Button/Button";

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
        <Button className={cls.toggle} onClick={onToggle}>toggle</Button>
        <div className={classNames(cls.switchers)}>
            <ThemeSwitcher/>
            <LangSwitcher className={cls.lang}/>
        </div>
    </aside>
);
}
