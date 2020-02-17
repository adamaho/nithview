import * as React from 'react';

import './App.css';

import {
  Button,
  Layout,
  Input
} from '@nithview/react';

const App = () => {
  return (
    <Layout>
      <Layout.Header>
        <h1>NithView</h1>
      </Layout.Header>
      <Layout.Content>
        <Input placeholder="hello" onChange={(e) => console.log(e.target)}>asdasdasd</Input>
        <Button type="tertiary" onClick={() => console.log('asdfasdfas')}>aasdfasdf</Button>
      </Layout.Content>
      <Layout.Footer>
        footer
      </Layout.Footer>
    </Layout>
  );
}

export default App;
