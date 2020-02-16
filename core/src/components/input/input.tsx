import {
  Component,
  Host,
  h,
  Prop
} from '@stencil/core';

@Component({
  tag: 'nv-input',
  styleUrl: 'input.less',
  shadow: true
})
export class Input {

  /** Placeholder for the input */
  @Prop() placeholder: string

  render() {
    return (
      <Host>
        <input
          placeholder={this.placeholder}
        >
        </input>
      </Host>
    );
  }

}
