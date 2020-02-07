import * as React from 'react';

import './header.css';

export const Header: React.FunctionComponent = ({
  children
}) => {
  return (
    <div className="nv-header">
      {children}
    </div>
  );
}