import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'nv-card',
  styleUrl: 'card.less',
  shadow: true
})
export class Card {
  render() {
    return (
      <Host>
        <nv-panel>
          <slot></slot>
        </nv-panel>
      </Host>
    );
  }

}
