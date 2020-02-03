import {
  Component,
  Event,
  State,
  Host,
  h,
  EventEmitter,
} from '@stencil/core';

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
  @State() selectedTab: string | number;

  /** The tab that is currently selected */
  @State() foo: { width: number, left: number } = { width: 0, left: 0};

  /** Event that is emitted when a new tab item is selected */
  @Event() tabChange: EventEmitter<string | number>

  /** When a tab is clicked, emit the change event. */
  handleTabClick = ({ detail }: CustomEvent<any>) => {
    if (this.selectedTab === detail.tab) {
      return;
    }

    this.foo = {
      width: detail.element.offsetWidth,
      left: detail.element.offsetLeft
    }
    this.selectedTab = detail.tab;
    this.tabChange.emit(detail.tab);
  }

  render() {
    return (
      <Host
        onTabClick={this.handleTabClick}
      >
        <div class="nv-tabs-container">
          <slot></slot>
        </div>
        <div
          class="nv-tab-indicator"
          style={{
            position: 'absolute',
            transform: `translate(${this.foo.left}px, 0px)`,
            transformOrigin: 'center',
            height: '5px',
            background: 'red',
            width: `${this.foo.width}px`,
            left: '0px',
            transition: 'all 0.2s ease-in-out'
          }}
        />
      </Host>
    );
  }

}
