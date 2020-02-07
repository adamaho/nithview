import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'nv-layout-header',
  styleUrl: 'layout-header.css',
  shadow: true
})
export class LayoutHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
