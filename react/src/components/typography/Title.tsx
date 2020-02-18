import * as React from 'react';

export const Title: React.FunctionComponent = ({
  children
}) => {
  return (
    <nv-title>
      {children}
    </nv-title>
  );
};