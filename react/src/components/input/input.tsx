import * as React from 'react';

export interface InputProps {
  placeholder: string;
  onChange: React.EventHandler<any>
}

export const Input: React.FunctionComponent<InputProps> = ({
  onChange,
  placeholder
}) => (
  <nv-input
    placeholder={placeholder}
    onChange={onChange}
  />
);
