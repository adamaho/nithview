import * as React from 'react';

import './footer.css';

export const Footer: React.FunctionComponent = ({
  children
}) => {
  return (
    <div className="nv-footer">
      {children}
    </div>
  );
}