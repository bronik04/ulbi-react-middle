import { StateSchema } from 'app/providers/SoreProvider/config/StateSchema';

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || '';
