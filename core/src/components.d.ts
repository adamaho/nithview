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
import {
  Key,
} from './components/tab-item/tab-item';
import {
  OrientationType,
} from './components/tabs/tabs';

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
  interface NvTabItem {
    /**
    * If true, the tab item will be in the active state
    */
    'selected': boolean;
    /**
    * Name of the tab. Used to determine which tab is currently selected.
    */
    'tab': string | number;
  }
  interface NvTabs {
    /**
    * Determines the orientation of the tabs
    */
    'orientation': OrientationType;
  }
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

  interface HTMLNvTabItemElement extends Components.NvTabItem, HTMLStencilElement {}
  var HTMLNvTabItemElement: {
    prototype: HTMLNvTabItemElement;
    new (): HTMLNvTabItemElement;
  };

  interface HTMLNvTabsElement extends Components.NvTabs, HTMLStencilElement {}
  var HTMLNvTabsElement: {
    prototype: HTMLNvTabsElement;
    new (): HTMLNvTabsElement;
  };
  interface HTMLElementTagNameMap {
    'nv-button': HTMLNvButtonElement;
    'nv-panel': HTMLNvPanelElement;
    'nv-tab-item': HTMLNvTabItemElement;
    'nv-tabs': HTMLNvTabsElement;
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
  interface NvTabItem {
    /**
    * Event that is emitted when the tab item is clicked
    * @interal
    */
    'onTabClick'?: (event: CustomEvent<Key>) => void;
    /**
    * If true, the tab item will be in the active state
    */
    'selected'?: boolean;
    /**
    * Name of the tab. Used to determine which tab is currently selected.
    */
    'tab': string | number;
  }
  interface NvTabs {
    /**
    * Event that is emitted when a new tab item is selected
    */
    'onTabChange'?: (event: CustomEvent<string | number>) => void;
    /**
    * Determines the orientation of the tabs
    */
    'orientation'?: OrientationType;
  }

  interface IntrinsicElements {
    'nv-button': NvButton;
    'nv-panel': NvPanel;
    'nv-tab-item': NvTabItem;
    'nv-tabs': NvTabs;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'nv-button': LocalJSX.NvButton & JSXBase.HTMLAttributes<HTMLNvButtonElement>;
      'nv-panel': LocalJSX.NvPanel & JSXBase.HTMLAttributes<HTMLNvPanelElement>;
      'nv-tab-item': LocalJSX.NvTabItem & JSXBase.HTMLAttributes<HTMLNvTabItemElement>;
      'nv-tabs': LocalJSX.NvTabs & JSXBase.HTMLAttributes<HTMLNvTabsElement>;
    }
  }
}


