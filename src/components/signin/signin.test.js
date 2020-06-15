import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SignIn from './signin.component';

describe('SignIn', () => {
  it('Should render SignIn', () => {
    render(<SignIn/>)
	});

	it('Should call handleSubmit when Submit Form', () => {
		const { getByTestId } = render(<SignIn/>);
    fireEvent.submit(getByRole("form"))
		expect(button).toHaveClass('google-sign-in');
	});
});
