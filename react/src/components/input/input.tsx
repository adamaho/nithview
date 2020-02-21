import * as React from 'react';

import {
  useCustomEvent
} from '../../hooks';

export interface InputProps {
  id: string;
  name: string;
  placeholder: string;
  onChange?: React.EventHandler<any>
  value?: string;
}

export const Input: React.FunctionComponent<InputProps> = ({
  id,
  name,
  onChange,
  placeholder,
  value
}) => {
  const inputRef = React.useRef<HTMLNvInputElement>(null);

  useCustomEvent('nvInput', inputRef, onChange);

  return (
    <nv-input
      input-id={id}
      name={name}
      placeholder={placeholder}
      ref={inputRef}
      value={value}
    />
  );
};
