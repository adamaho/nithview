import * as React from 'react';

import './App.css';

import {
  Button,
  Layout,
  Input,
  Typography
} from '@nithview/react';

const App = () => {
  return (
    <Layout>
      <Layout.Header>
        <Typography.Title>NithView</Typography.Title>
      </Layout.Header>
      <Layout.Content>
        <Typography.Subtitle>This is a Subtitle</Typography.Subtitle>
        <Input value="sdfsdfds" placeholder="hello" onChange={(e) => console.log(e.detail)} />
        <Button type="tertiary" onClick={() => console.log('asdfasdfas')}>aasdfasdf</Button>
        <Typography.Body>this is some body stuffffffffff</Typography.Body>
      </Layout.Content>
      <Layout.Footer>
        footer
      </Layout.Footer>
    </Layout>
  );
}

export default App;
