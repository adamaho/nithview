import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'nv-panel',
  styleUrl: './panel.less',
  shadow: true
})
export class Panel {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
