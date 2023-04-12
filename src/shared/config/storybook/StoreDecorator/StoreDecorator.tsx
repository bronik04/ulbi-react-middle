import { Story } from '@storybook/react';
import { StateSchema } from 'app/providers/SoreProvider/config/StateSchema';
import { StoreProvider } from 'app/providers/SoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (state:DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
);
