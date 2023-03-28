import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string,
    children?: ReactNode,
}

export const Modal = ({ className, children }: ModalProps) => (
    <div className={classNames(cls.modal, {}, [className])}>
        <div className={cls.overlay}>
            <div className={cls.content}>
                {children}
            </div>
        </div>
    </div>
);
