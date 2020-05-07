import React from 'react';
import './button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
  return (
    <button
      data-testid="button"
      className={
      `${isGoogleSignIn ? 'google-sign-in' : ''}
      ${inverted ? 'inverted' : ''}
      custom-button`}
      {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton;
