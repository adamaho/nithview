import * as React from 'react';

export const Subtitle: React.FunctionComponent = ({
  children
}) => {
  return (
    <nv-subtitle>
      {children}
    </nv-subtitle>
  );
};