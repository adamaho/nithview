import * as React from 'react';

import './App.css';

import {
  Button
} from '@nithview/react';

const App = () => {
  return (
    <nv-layout style={{ background: "black" }}>
      <nv-layout-header>
        <h1>NithView</h1>
      </nv-layout-header>
      <nv-layout-content>
        <Button type="ghost" onClick={() => console.log('asdfasdfas')}>aasdfasdf</Button>
      </nv-layout-content>
      <nv-layout-footer>
        footer
      </nv-layout-footer>
    </nv-layout>
  );
}

export default App;
