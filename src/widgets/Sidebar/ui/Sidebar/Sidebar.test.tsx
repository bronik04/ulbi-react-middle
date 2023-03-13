import { fireEvent, render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Test render ', () => {
        const SidebarWithTranslation = withTranslation()(Sidebar);
        render(<SidebarWithTranslation />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test toggle ', () => {
        const SidebarWithTranslation = withTranslation()(Sidebar);
        render(<SidebarWithTranslation />);
        const sidebarBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(sidebarBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
