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
  interface NvButton {
    /**
    * If true, the button will be disabled
    */
    'disabled': boolean;
    /**
    * If true, the button will be in a loading state
    */
    'loading': boolean;
    /**
    * The type of the button
    */
    'type': ButtonType;
  }
  interface NvPanel {
    /**
    * If true, active, hover, focus styles will be applied
    */
    'clickable': boolean;
  }
  interface NvSidebar {}
  interface NvSidebarItem {}
}

declare global {


  interface HTMLNvButtonElement extends Components.NvButton, HTMLStencilElement {}
  var HTMLNvButtonElement: {
    prototype: HTMLNvButtonElement;
    new (): HTMLNvButtonElement;
  };

  interface HTMLNvPanelElement extends Components.NvPanel, HTMLStencilElement {}
  var HTMLNvPanelElement: {
    prototype: HTMLNvPanelElement;
    new (): HTMLNvPanelElement;
  };

  interface HTMLNvSidebarElement extends Components.NvSidebar, HTMLStencilElement {}
  var HTMLNvSidebarElement: {
    prototype: HTMLNvSidebarElement;
    new (): HTMLNvSidebarElement;
  };

  interface HTMLNvSidebarItemElement extends Components.NvSidebarItem, HTMLStencilElement {}
  var HTMLNvSidebarItemElement: {
    prototype: HTMLNvSidebarItemElement;
    new (): HTMLNvSidebarItemElement;
  };
  interface HTMLElementTagNameMap {
    'nv-button': HTMLNvButtonElement;
    'nv-panel': HTMLNvPanelElement;
    'nv-sidebar': HTMLNvSidebarElement;
    'nv-sidebar-item': HTMLNvSidebarItemElement;
  }
}

declare namespace LocalJSX {
  interface NvButton {
    /**
    * If true, the button will be disabled
    */
    'disabled'?: boolean;
    /**
    * If true, the button will be in a loading state
    */
    'loading'?: boolean;
    /**
    * The type of the button
    */
    'type'?: ButtonType;
  }
  interface NvPanel {
    /**
    * If true, active, hover, focus styles will be applied
    */
    'clickable'?: boolean;
  }
  interface NvSidebar {}
  interface NvSidebarItem {}

  interface IntrinsicElements {
    'nv-button': NvButton;
    'nv-panel': NvPanel;
    'nv-sidebar': NvSidebar;
    'nv-sidebar-item': NvSidebarItem;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'nv-button': LocalJSX.NvButton & JSXBase.HTMLAttributes<HTMLNvButtonElement>;
      'nv-panel': LocalJSX.NvPanel & JSXBase.HTMLAttributes<HTMLNvPanelElement>;
      'nv-sidebar': LocalJSX.NvSidebar & JSXBase.HTMLAttributes<HTMLNvSidebarElement>;
      'nv-sidebar-item': LocalJSX.NvSidebarItem & JSXBase.HTMLAttributes<HTMLNvSidebarItemElement>;
    }
  }
}


