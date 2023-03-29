import React, { Suspense, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';

function App() {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        console.log('click');
        setIsOpen(true);
    };

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <button onClick={handleClick}>toggle</button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquam culpa cumque, dolorum esse excepturi fugit impedit
                    itaque nam nihil pariatur perferendis quibusdam, quidem
                    quisquam, rerum sit soluta vel voluptas voluptatem.
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
