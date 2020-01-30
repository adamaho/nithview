import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'nv-card',
  styleUrl: 'card.less',
  shadow: true
})
export class Card {
  render() {
    return (
      <Host
        class={{
          clickable: true
        }}
      >
        <nv-panel>
          <slot></slot>
        </nv-panel>
      </Host>
    );
  }

}
