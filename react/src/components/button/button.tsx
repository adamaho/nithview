import * as React from 'react';

import {
  useCustomEvent
} from '../../hooks';

export interface ButtonProps {
  htmlType?: 'submit' | 'reset' | 'text';
  type?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  onClick?: React.EventHandler<React.MouseEvent>;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  htmlType,
  onClick,
  type
}) => {
  const buttonRef = React.useRef<HTMLNvButtonElement>(null);

  useCustomEvent('nvClick', buttonRef, onClick);

  return (
    <nv-button
      html-type={htmlType}
      ref={buttonRef}
      type={type}
    >
      {children}
    </nv-button>
  )
};

Button.defaultProps = {
  type: "primary"
}
