import {
  newSpecPage
} from '@stencil/core/testing';

import {
  TabItem
} from './tab-item';

describe('nv-tab-item', () => {
it('builds', () => {
    expect(new TabItem()).toBeTruthy();
  });

it('renders', async () => {
    const page = await newSpecPage({
      components: [TabItem],
      html: `<nv-tab-item tab="test">Test</nv-tab-item>`
    });

    expect(page.root).toEqualHtml(`
      <nv-tab-item tab="test" tabindex="0">
        <mock:shadow-root>
          <slot name="nv-tab-icon"></slot>
          <slot></slot>
        </mock:shadow-root>
        Test
      </nv-tab-item>
    `)
  });
});
