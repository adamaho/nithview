import {
  Component,
  Event,
  State,
  Host,
  h,
  EventEmitter,
} from '@stencil/core';

export interface SelectedTab {
  name: string | number;
  width: number;
  x: number;
}

/**
 * @slot - Collection of `nv-tab-item`'s.
 */
@Component({
  tag: 'nv-tabs',
  styleUrl: './tabs.less',
  shadow: true
})
export class Tabs {

  /** The tab that is currently selected */
  @State() selectedTab: SelectedTab;

  /** Event that is emitted when a new tab item is selected */
  @Event() tabChange: EventEmitter<string | number>

  /** When a tab is clicked, emit the change event. */
  handleTabClick = ({ detail }: CustomEvent<SelectedTab>) => {
    if (this.selectedTab && this.selectedTab.name === detail.name) {
      return;
    }

    this.selectedTab = {
      ...detail
    }
    this.tabChange.emit(detail.name);
  }

  render() {
    return (
      <Host
        onTabClick={this.handleTabClick}
      >
        <div class="nv-tabs-container">
          <slot></slot>
        </div>
        {this.selectedTab &&
          <div
            class="nv-tab-indicator"
            style={{
              position: 'absolute',
              transform: `translate(${this.selectedTab.x}px, 0px)`,
              transformOrigin: 'center',
              height: '5px',
              width: `${this.selectedTab.width}px`,
              left: '0px',
              transition: 'all 0.2s ease-in-out'
            }}
          />
        }
      </Host>
    );
  }

}
