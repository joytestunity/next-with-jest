import Dashboard from '@/app/dashboard/page';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Dashboard', () => {
	it('should render', () => {
		render(<Dashboard />);
		expect(2).toBe(2);
	});
});
