import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'nv-layout',
  styleUrl: './layout.less',
  shadow: true
})
export class Layout {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
