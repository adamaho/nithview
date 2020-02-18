import {
  Component,
  Element,
  Event,
  Host,
  h,
  Prop,
  Watch,
  EventEmitter
} from '@stencil/core';

@Component({
  tag: 'nv-input',
  styleUrl: 'input.less',
  shadow: true
})
export class Input {

  private nativeInput?: HTMLInputElement;

  /** Value of the input */
  @Prop() value: string

  /** Placeholder for the input */
  @Prop() placeholder: string

  /** Event to handle change for input */
  @Event() nvInput: EventEmitter;

  /** Input Handler for input */
  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    this.nvInput.emit({ value: input.value });
  }

  /** Update the native input element when the value changes */
  @Watch('value')
  protected valueChanged(value) {
    this.nativeInput.value = value;
  }

  render() {
    return (
      <Host>
        <input
          ref={input => this.nativeInput = input}
          placeholder={this.placeholder}
          onInput={this.onInput}
          value={this.value}
        />
      </Host>
    );
  }

}
