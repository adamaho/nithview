import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'nv-card',
  styleUrl: './card.less',
  shadow: true
})
export class Card {

  /** The title of the card */
  @Prop() title!: string;

  /** The description of the card */
  @Prop() description!: string;

  render() {
    return (
      <Host>
        <nv-panel>
          <slot></slot>
          <div class="nv-card-title">{this.title}</div>
          <div class="nv-card-description">{this.description}</div>
        </nv-panel>
      </Host>
    );
  }
}
