import {
  Component,
  Element,
  Event,
  State,
  Prop,
  Host,
  h,
  EventEmitter,
} from '@stencil/core';

export interface SelectedTab {
  name: string | number;
  width: number;
  height: number;
  x: number;
  y: number;
}

export type Orientation = 'vertical' | 'horizontal';

/** Retrieves the selected tab item element */
const getSelectedTab = (tabItems: HTMLNvTabItemElement[], tabName: string): HTMLNvTabItemElement => {
  const tabEl = tabItems.find((child) => child.tab === tabName);

  if (!tabEl) {
    console.warn(`tab=${tabName} does not exist`);
    return;
  }

  return tabEl;
}

const getIndicatorStyle = (orientation: Orientation, selectedTab: SelectedTab): any => {
  if (orientation === 'vertical') {
    return {
      transform: `translate(0px, ${selectedTab.y}px)`,
      height: `${selectedTab.height}px`,
    }
  }

  return {
    transform: `translate(${selectedTab.x}px, 0px)`,
    width: `${selectedTab.width}px`,
  }
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

  /** Tabs element */
  @Element() el: HTMLNvTabsElement;

  /** The default selected tab */
  @Prop() defaultSelectedTab!: string;

  /** The orientation of the tabs */
  @Prop() orientation: Orientation = 'horizontal';

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

  componentDidLoad() {
    const tabItems = Array.from(this.el.querySelectorAll<HTMLNvTabItemElement>('nv-tab-item'));
    const defaultSelectTabEl = getSelectedTab(tabItems, this.defaultSelectedTab);

    if (defaultSelectTabEl == null) {
      return;
    }

    // setTimeout to defer the execution of this state change
    // until after the inital lifecycle
    setTimeout(() => {
      this.selectedTab = {
        name: defaultSelectTabEl.tab,
        width: defaultSelectTabEl.offsetWidth,
        height: defaultSelectTabEl.offsetHeight,
        x: defaultSelectTabEl.offsetLeft,
        y: defaultSelectTabEl.offsetTop
      };

      this.tabChange.emit(defaultSelectTabEl.tab);
    }, 0)
  }

  render() {
    return (
      <Host
        onTabClick={this.handleTabClick}
        class={{
          [this.orientation]: true
        }}
      >
        <div class="nv-tabs-container">
          <slot></slot>
        </div>
        {this.selectedTab &&
          <div
            class="nv-tab-indicator"
            style={getIndicatorStyle(this.orientation, this.selectedTab)}
          />
        }
      </Host>
    );
  }
}
