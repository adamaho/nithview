import * as React from 'react';

import './App.css';

const App = () => {

  const fooRef = React.useRef(null);

  // React.useEffect(() => {
  //   if (fooRef.current !== null) {
  //     // @ts-ignore

  //     console.log('heree');
  //     //@ts-ignore
  //     fooRef.current.addEventListener('tabChange', ({ detail }: any) => console.log(detail))
  //   }

  //   // return () => {
  //   //   fooRef.current.removeEventListener(() => );
  //   // }
  // }, []);
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
