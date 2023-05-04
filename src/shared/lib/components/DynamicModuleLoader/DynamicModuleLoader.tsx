import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/SoreProvider';
import { StateSchemaKey } from 'app/providers/SoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

interface DynamicModuleLoaderProps {
    keyName: StateSchemaKey,
    reducer: Reducer,
    removeAfterUnmount?: boolean,
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children, keyName, reducer, removeAfterUnmount,
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        store.reducerManager.add(keyName, reducer);
        dispatch({ type: `@INIT ${keyName} reducer` });
        return () => {
            if (removeAfterUnmount) {
                store.reducerManager.remove(keyName);
                dispatch({ type: `@DESTROY ${keyName} reducer` });
            }
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
