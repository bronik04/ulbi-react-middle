import { StateSchema } from 'app/providers/SoreProvider/config/StateSchema';

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';
