import {
  EventEmitter,
  Component,
  Event,
  Prop,
  Host,
  h,
} from '@stencil/core';

export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'ghost';

/**
 * @slot - Content that is placed in the button. Must be a `string`.
 */
@Component({
  tag: 'nv-button',
  styleUrl: 'button.less',
  shadow: true
})
export class Button {

  /** The type of the button */
  @Prop() type: ButtonType = 'primary';

  /** If true, the button will be disabled */
  @Prop() disabled: boolean = false;

  /** If true, the button will be in a loading state */
  @Prop() loading: boolean = false;

  /** Event to handle button click */
  @Event() buttonClick: EventEmitter;

  /** Click Handler for button */
  onClick = (e) => {
    this.buttonClick.emit(e);
  }

  render() {
    return (
      <Host
        class={{
          [`nv-button-${this.type}`]: true,
          'nv-button-loading': this.loading
        }}
      >
        <button onClick={this.onClick} disabled={this.disabled || this.loading}>
          <slot></slot>
        </button>  
      </Host>
    );
  }

}
