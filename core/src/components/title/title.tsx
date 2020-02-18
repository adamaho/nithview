import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'nv-title',
  styleUrl: 'title.less',
  shadow: true
})
export class Title {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
