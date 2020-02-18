import * as React from 'react';

import {
  useCustomEvent
} from '../../hooks';

export interface InputProps {
  placeholder: string;
  onChange: React.EventHandler<any>
  value?: string;
}

export const Input: React.FunctionComponent<InputProps> = ({
  onChange,
  placeholder,
  value
}) => {
  const inputRef = React.useRef<HTMLNvInputElement>(null);

  useCustomEvent('nvInput', inputRef, onChange);

  return (
    <nv-input
      ref={inputRef}
      placeholder={placeholder}
      value={value}
    />
  );
};
