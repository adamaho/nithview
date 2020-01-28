import {
  Component,
  Prop,
  Host,
  h
} from '@stencil/core';


export type ButtonType = 'primary' | 'default';

@Component({
  tag: 'nv-button',
  styleUrl: './button.less',
  shadow: true
})
export class Button {

  @Prop() type: ButtonType = 'default';

  render() {
    return (
      <Host
        class={{
          'primary': this.type === 'primary',
          'default': this.type === 'default'
        }}
      >
        <button>
          <slot />
        </button>
      </Host>
    );
  }

}
