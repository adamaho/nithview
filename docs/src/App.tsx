import * as React from 'react';

import './App.css';

const App = () => {

  const fooRef = React.useRef<HTMLNvTabsElement>(null);

  React.useEffect(() => {
    const foo = fooRef;
    function onTabChange(ev: any) {
      console.log(ev.detail);
    }

    if (foo.current !== null) {
      foo.current.addEventListener('tabChange', onTabChange);
    }

    return () => {
      if (foo.current) {
        foo.current.removeEventListener('tabChange', onTabChange);
      }
    }
  }, []);
  return (
    <div className="root">
      <div className="header">
        <nv-tabs ref={fooRef} default-selected-tab="components">
          <nv-tab-item tab="components">Components</nv-tab-item>
          <nv-tab-item tab="About">About</nv-tab-item>
        </nv-tabs>
      </div>
    </div>
  );
}

export default App;
