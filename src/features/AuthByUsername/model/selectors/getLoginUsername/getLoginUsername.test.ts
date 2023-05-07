import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/SoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'user',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('user');
    });

    test('should with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
