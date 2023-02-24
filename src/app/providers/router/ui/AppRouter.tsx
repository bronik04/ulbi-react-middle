import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <div className="page-wrapper">
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </div>
    </Suspense>
);

export default AppRouter;
