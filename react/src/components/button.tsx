import * as React from 'react';

interface ButtonProps {
  type: 'foo';
}

export const Button: React.FunctionComponent<any> = ({
  children,
  onClick,
  type
}) => (
  <nv-button
    type={type}
    onClick={onClick}
  >
    {children}
  </nv-button>
);
