import {
  Component,
  Host,
  h,
  Prop,
} from '@stencil/core';

/**
 * @slot - Content that is placed in the panel
 */
@Component({
  tag: 'nv-panel',
  styleUrl: './panel.less',
  shadow: true
})
export class Panel {

  /** If true, active, hover, focus styles will be applied */
  @Prop() clickable: boolean = false;

  render() {
    return (
      <Host
        class={{
          clickable: this.clickable
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
