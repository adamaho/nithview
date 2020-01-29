/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  ButtonType,
} from './components/button/button';

export namespace Components {
  interface NithButton {
    /**
    * The type of the button
    */
    'type': ButtonType;
  }
}

declare global {


  interface HTMLNithButtonElement extends Components.NithButton, HTMLStencilElement {}
  var HTMLNithButtonElement: {
    prototype: HTMLNithButtonElement;
    new (): HTMLNithButtonElement;
  };
  interface HTMLElementTagNameMap {
    'nith-button': HTMLNithButtonElement;
  }
}

declare namespace LocalJSX {
  interface NithButton {
    /**
    * The type of the button
    */
    'type'?: ButtonType;
  }

  interface IntrinsicElements {
    'nith-button': NithButton;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'nith-button': LocalJSX.NithButton & JSXBase.HTMLAttributes<HTMLNithButtonElement>;
    }
  }
}


