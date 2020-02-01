import React from 'react';

const App = () => {
  return (
    <div className="root">
      <nv-panel clickable>
        <nv-button
          type="primary"
          onClick={() => console.log('asdfasdf')}
        >
          asdfasdf
        </nv-button>
      </nv-panel>
    </div>
  );
}

export default App;
