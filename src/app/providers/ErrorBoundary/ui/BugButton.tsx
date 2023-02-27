import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

// Компонент для тестирования ошибок

export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const toggleError = () => setError(!error);
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button onClick={toggleError}>
            {t('Get bug')}
        </Button>
    );
};
