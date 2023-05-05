import {
    configureStore,
    DeepPartial,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import {
    createReducerManager,
} from 'app/providers/SoreProvider/config/reducerManager';
import { StateSchema } from './StateSchema';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        // loginForm: loginReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
