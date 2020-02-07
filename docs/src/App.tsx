import * as React from 'react';

import {
  useCustomEvent
} from './hooks';

import {
  Layout,
  Header,
  Content,
  Footer
} from './components/layout';

import './App.css';

const App = () => {
  const tabsRef = React.useRef<HTMLNvTabsElement>(null);

  useCustomEvent('tabChange', tabsRef, (e: any) => console.log(e));

  return (
    <Layout>
      <Header>
        <h1>NithView</h1>
        <nv-tabs ref={tabsRef} default-selected-tab="components">
          <nv-tab-item tab="components">Components</nv-tab-item>
          <nv-tab-item tab="About">About</nv-tab-item>
        </nv-tabs>
      </Header>
      <Content>
        content
      </Content>
      <Footer>
        footer
      </Footer>
    </Layout>
  );
}

export default App;
