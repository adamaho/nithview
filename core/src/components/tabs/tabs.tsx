import {
  Component,
  Element,
  Event,
  State,
  Host,
  Prop,
  h,
  EventEmitter,
} from '@stencil/core';

export type TabsType = 'horizontal' | 'vertical';

@Component({
  tag: 'nv-tabs',
  styleUrl: './tabs.less',
  shadow: true
})
export class Tabs {

  @Element() el!: HTMLElement;

  /** Determines the orientation of the tabs */
  @Prop() type: TabsType = 'horizontal';

  /** The tab that is currently selected */
  @State() selectedTab: string | number;

  /**
   * Event that is emitted when a new tab item is selected
   * @interal
  */
  @Event() nvTabsChange: EventEmitter<string | number>

  handleTabItemClick = ({ detail }) => {
    if (this.selectedTab === detail) {
      return;
    }

    this.selectedTab = detail;
    this.nvTabsChange.emit(detail);
  }

  render() {
    return (
      <Host
        class={{
          [this.type]: true
        }}
        onNvTabItemClick={this.handleTabItemClick}
      >
        <slot></slot>
      </Host>
    );
  }

}
