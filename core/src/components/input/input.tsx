import {
  Component,
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

  /** id of the input */
  @Prop() inputId: string

  /** name of the input */
  @Prop() name: string

  /** Placeholder for the input */
  @Prop() placeholder: string

  /** Value of the input */
  @Prop() value: string

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
          id={this.inputId}
          name={this.name}
          onInput={this.onInput}
          placeholder={this.placeholder}
          ref={input => this.nativeInput = input}
          value={this.value}
        />
      </Host>
    );
  }

}
