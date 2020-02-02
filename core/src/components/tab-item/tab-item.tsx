import {
  EventEmitter,
  Component,
  Event,
  Prop,
  Host,
  h,
  Listen,
} from '@stencil/core';

export type Key = string | number;

@Component({
  tag: 'nv-tab-item',
  styleUrl: './tab-item.less',
  shadow: true
})
export class TabItem {

  /** If true, the tab item will be in the active state */
  @Prop({ mutable: true }) selected: boolean = false;

  /** If true, the tab item will be in the active state */
  @Prop() key!: string | number;

  /**
   * Event that is emitted when the tab item is clicked
   * @interal
  */
  @Event() tabClick!: EventEmitter<Key>

  onTabClick = () => {
    this.tabClick.emit(this.key);
  }

  @Listen('tabChange', { target: 'parent' })
  onTabChange({ detail }) {
    this.selected = detail === this.key;
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
        <slot></slot>
      </Host>
    );
  }

}
