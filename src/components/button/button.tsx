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

   /**
   * The type of the button
   */
  @Prop() type: ButtonType = 'default';

  render() {
    return (
      <Host
        class={{
          [this.type]: true
        }}
      >
        <button>
          <slot />
        </button>  
      </Host>
    );
  }

}
