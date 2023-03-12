import { render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Test render ', () => {
        render(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
