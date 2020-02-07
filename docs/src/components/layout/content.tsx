import * as React from 'react';

import './content.css';

export const Content: React.FunctionComponent = ({
  children
}) => {
  return (
    <div className="nv-content">
      {children}
    </div>
  );
}