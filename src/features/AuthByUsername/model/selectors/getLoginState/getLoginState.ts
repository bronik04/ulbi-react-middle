import { StateSchema } from 'app/providers/SoreProvider/config/StateSchema';

export const getLoginState = (state: StateSchema) => state?.loginForm;
