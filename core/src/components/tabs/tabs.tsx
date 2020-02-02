import {
  Component,
  Event,
  State,
  Host,
  Prop,
  h,
  EventEmitter,
} from '@stencil/core';

export type OrientationType = 'horizontal' | 'vertical';

/**
 * @slot - Collection of `nv-tab-item`'s.
 */
@Component({
  tag: 'nv-tabs',
  styleUrl: './tabs.less',
  shadow: true
})
export class Tabs {

  /** Determines the orientation of the tabs */
  @Prop() orientation: OrientationType = 'horizontal';

  /** The tab that is currently selected */
  @State() selectedTab: string | number;

  /** Event that is emitted when a new tab item is selected */
  @Event() tabChange: EventEmitter<string | number>

  /** When a tab is clicked, emit the change event. */
  handleTabClick = ({ detail }: CustomEvent<string | number>) => {
    if (this.selectedTab === detail) {
      return;
    }

    this.selectedTab = detail;
    this.tabChange.emit(detail);
  }

  render() {
    return (
      <Host
        class={{
          [this.orientation]: true
        }}
        onTabClick={this.handleTabClick}
      >
        <slot></slot>
      </Host>
    );
  }

}
