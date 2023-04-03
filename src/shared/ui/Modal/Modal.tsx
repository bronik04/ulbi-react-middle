import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    ReactNode, useCallback, useEffect, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void,
    lazy?: boolean
}

export const Modal = (props: ModalProps) => {
    const {
        className, children, isOpen, onClose, lazy,
    } = props;
    const { theme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const mods = {
        [cls.opened]: isOpen,
    };

    const handleClose = useCallback(() => {
        if (onClose) onClose();
    }, [onClose]);

    const handleContentClick = (e: React.MouseEvent) => e.stopPropagation();

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    }, [handleClose]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (lazy && !isMounted) return null;

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className])}>
                <div className={cls.overlay} onClick={handleClose}>
                    <div className={cls.content} onClick={handleContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
