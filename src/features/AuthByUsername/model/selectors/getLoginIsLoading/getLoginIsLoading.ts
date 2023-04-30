import { StateSchema } from 'app/providers/SoreProvider/config/StateSchema';

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
