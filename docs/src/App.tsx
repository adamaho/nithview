import * as React from 'react';

import {
  useCustomEvent
} from './hooks';

import './App.css';

const App = () => {
  const tabsRef = React.useRef<HTMLNvTabsElement>(null);

  useCustomEvent('tabChange', tabsRef, (e: any) => console.log(e));

  return (
    <nv-layout>
      <nv-layout-header>
        <h1>NithView</h1>
        <nv-tabs ref={tabsRef} default-selected-tab="components">
          <nv-tab-item tab="components">Components</nv-tab-item>
          <nv-tab-item tab="about">About</nv-tab-item>
        </nv-tabs>
      </nv-layout-header>
      <nv-layout-content>
        
      </nv-layout-content>
      <nv-layout-footer>
        footer
      </nv-layout-footer>
    </nv-layout>
  );
}

export default App;
