import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'nv-layout-footer',
  styleUrl: 'layout-footer.css',
  shadow: true
})
export class LayoutFooter {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
