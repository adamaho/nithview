export {
  Button
} from './components/button';

export {
  useCustomEvent
} from './hooks';

import { DetailedHTMLProps, HTMLAttributes } from 'react';

import {
  JSX as LocalJSX
} from '@nithview/core/loader';

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