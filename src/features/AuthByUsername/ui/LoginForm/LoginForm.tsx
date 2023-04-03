import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <form className={classNames(cls.loginForm, {}, [className])}>
            <Input
                autofocus
                type="text"
                placeholder={t('Введите username')}
            />
            <Input
                type="text"
                placeholder={t('Введите пароль')}
            />
            <Button className={cls.login__btn}>
                {t('Войти')}
            </Button>
        </form>
    );
};
