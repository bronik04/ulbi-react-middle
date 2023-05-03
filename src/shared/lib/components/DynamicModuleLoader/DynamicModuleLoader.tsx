import { FC, useEffect } from 'react';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/SoreProvider';

interface DynamicModuleLoaderProps {}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        store.reducerManager.add('loginForm', loginReducer);
        dispatch({ type: '@INIT login form reducer' });
        return () => {
            store.reducerManager.remove('loginForm');
            dispatch({ type: '@DESTROY login form reducer' });
        };
        // eslint-disable-next-line
    }, []);
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
