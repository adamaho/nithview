import {
  EventEmitter,
  Component,
  Event,
  Prop,
  Host,
  h,
} from '@stencil/core';

export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'ghost';
export type HTMLType = 'text' | 'submit' | 'reset'

/**
 * @slot - Content that is placed in the button. Must be a `string`.
 */
@Component({
  tag: 'nv-button',
  styleUrl: 'button.less',
  shadow: true
})
export class Button {
  
  
  /** If true, the button will be disabled */
  @Prop() disabled: boolean = false;

  /** HTML type of the button */
  @Prop() htmlType: HTMLType;
  
  /** If true, the button will be in a loading state */
  @Prop() loading: boolean = false;

  /** The type of the button */
  @Prop() type: ButtonType = 'primary';

  /** Event to handle button click */
  @Event() nvClick: EventEmitter;

  /** Click Handler for button */
  onClick = (e) => {
    this.nvClick.emit(e);
  }

  render() {
    return (
      <Host
        class={{
          [`nv-button-${this.type}`]: true,
          'nv-button-loading': this.loading
        }}
      >
        <button
          disabled={this.disabled || this.loading}
          type={this.htmlType}
          onClick={this.onClick}
        >
          <slot></slot>
        </button>  
      </Host>
    );
  }

}
