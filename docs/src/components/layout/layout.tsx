import * as React from 'react';

import './layout.css';

export const Layout: React.FunctionComponent = ({
  children
}) => {
  return (
    <div className="nith-layout">
      {children}
    </div>
  );
}