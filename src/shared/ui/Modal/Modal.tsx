import { classNames } from 'shared/lib/classNames/classNames';
import React, { ReactNode } from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void
}

export const Modal = (props: ModalProps) => {
    const {
        className, children, isOpen, onClose,
    } = props;

    const mods = {
        [cls.opened]: isOpen,
    };

    const handleClose = () => {
        if (onClose) onClose();
    };

    const handleContentClick = (e: React.MouseEvent) => e.stopPropagation();

    return (
        <div className={classNames(cls.modal, mods, [className])}>
            <div className={cls.overlay} onClick={handleClose}>
                <div className={cls.content} onClick={handleContentClick}>
                    {children}
                </div>
            </div>
        </div>
    );
};
