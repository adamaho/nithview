import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'nv-subtitle',
  styleUrl: 'subtitle.less',
  shadow: true
})
export class Subtitle {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
