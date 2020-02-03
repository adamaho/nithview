import {
  EventEmitter,
  Component,
  Event,
  Prop,
  Host,
  h,
  Listen,
} from '@stencil/core';

// export type Tab = string | number;

/**
 * @slot - Content that is placed in the in the tab item. Must be a `string`.
 * @slot nv-tab-icon - Icon to show to the left of the tab item.
 */
@Component({
  tag: 'nv-tab-item',
  styleUrl: './tab-item.less',
  shadow: true
})
export class TabItem {

  /** If true, the tab item will be in the active state */
  @Prop({ mutable: true }) selected: boolean = false;

  /** Name of the tab. Used to determine which tab is currently selected. */
  @Prop() tab!: string | number;

  /**
   * Event that is emitted when the tab item is clicked
   * @interal
  */
  @Event() tabClick!: EventEmitter<any>

  onTabClick = (e) => {
    this.tabClick.emit({ tab: this.tab, element: e.target });
  }

  @Listen('tabChange', { target: 'parent' })
  onTabChange({ detail }) {
    this.selected = detail === this.tab;
  }

  render() {
    return (
      <Host
        class={{
          selected: this.selected
        }}
        tabIndex={0}
        onClick={this.onTabClick}
      >
        <slot name="nv-tab-icon"></slot>
        <slot></slot>
      </Host>
    );
  }

}
