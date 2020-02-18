import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'nv-body',
  styleUrl: 'body.less',
  shadow: true
})
export class Body {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
