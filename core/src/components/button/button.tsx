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

  /** The type of the button */
  @Prop() type: ButtonType = 'default';

  /** If true, the button will be disabled */
  @Prop() disabled: boolean = false;

  /** If true, the button will be in a loading state */
  @Prop() loading: boolean = false;

  render() {
    return (
      <Host
        class={{
          [`nv-button-${this.type}`]: true,
          'nv-button-loading': this.loading
        }}
      >
        <button disabled={this.disabled || this.loading}>
          <slot></slot>
        </button>  
      </Host>
    );
  }

}
