import * as React from 'react';

export interface ButtonProps {
  type: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  onClick: React.EventHandler<React.MouseEvent>;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
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
