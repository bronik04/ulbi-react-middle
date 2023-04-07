import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Text.module.scss';

interface TextProps {
    className?: string,
    title?: string,
    text?: string,
}

export const Text = ({ className, title, text }: TextProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.text, {}, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
