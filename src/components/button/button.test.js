import React from 'react';
import { render } from '@testing-library/react';
import Button from './button.component';

describe('Button', () => {

	it('Should render Button as Google Sign in', () => {
		const { getByTestId } = render(<Button isGoogleSignIn={true}/>);
		const button = getByTestId('button');
		expect(button).toHaveClass('custom-button');
		expect(button).toHaveClass('google-sign-in');
	});

  it('Should render Button as inverted', () => {
    const { getByTestId } = render(<Button inverted={true}/>);
    const button = getByTestId('button');
    expect(button).toHaveClass('custom-button');
    expect(button).toHaveClass('inverted');
  });

  it('Should have the children as text', () => {
    let buttonText = "Sign In";
    const { getByTestId } = render(<Button children={buttonText}/>);
    const button = getByTestId('button');
    expect(button.textContent).toBe(buttonText);
  });
});
