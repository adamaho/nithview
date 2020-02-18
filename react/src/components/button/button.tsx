import * as React from 'react';

import {
  useCustomEvent
} from '../../hooks';

export interface ButtonProps {
  type: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  onClick: React.EventHandler<React.MouseEvent>;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  type
}) => {
  const buttonRef = React.useRef<HTMLNvButtonElement>(null);

  useCustomEvent('nvClick', buttonRef, onClick);

  return (
    <nv-button
      ref={buttonRef}
      type={type}
    >
      {children}
    </nv-button>
  )
};
