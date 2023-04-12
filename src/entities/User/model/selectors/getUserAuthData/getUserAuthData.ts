import { StateSchema } from 'app/providers/SoreProvider/config/StateSchema';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
