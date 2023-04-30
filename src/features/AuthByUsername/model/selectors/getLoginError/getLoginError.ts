import { StateSchema } from 'app/providers/SoreProvider/config/StateSchema';

export const getLoginError = (state: StateSchema) => state?.loginForm?.error;
