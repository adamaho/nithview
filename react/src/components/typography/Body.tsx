import * as React from 'react';

export const Body: React.FunctionComponent = ({
  children
}) => {
  return (
    <nv-body>
      {children}
    </nv-body>
  );
};