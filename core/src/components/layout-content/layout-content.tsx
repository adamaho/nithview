import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'nv-layout-content',
  styleUrl: './layout-content.less',
  shadow: true
})
export class LayoutContent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
