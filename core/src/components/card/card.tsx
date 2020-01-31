import { Component, Host, h, Prop } from '@stencil/core';

/**
 * @slot - Content that is placed in the card above the title
 */
@Component({
  tag: 'nv-card',
  styleUrl: './card.less',
  shadow: true
})
export class Card {

  /** If true, card will be clickable */
  @Prop() clickable: boolean = false;

  render() {
    return (
      <Host>
        <nv-panel clickable={this.clickable}>
          <slot></slot>
        </nv-panel>
      </Host>
    );
  }
}
