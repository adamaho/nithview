import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import './index.css';

import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { defineCustomElements, JSX as LocalJSX } from '@nithview/core/loader';

type StencilProps<T> = {
  [P in keyof T]?: Omit<T[P], 'ref'> | HTMLAttributes<T>;
};
  
type ReactProps<T> = {
  [P in keyof T]?: DetailedHTMLProps<HTMLAttributes<T[P]>, T[P]>;
};

type StencilToReact<T = LocalJSX.IntrinsicElements, U = HTMLElementTagNameMap> = StencilProps<T> &
  ReactProps<U>;

declare global {
  export namespace JSX {
    interface IntrinsicElements extends StencilToReact { }
  }
}

defineCustomElements(window);


ReactDOM.render(<App />, document.getElementById('root'));
