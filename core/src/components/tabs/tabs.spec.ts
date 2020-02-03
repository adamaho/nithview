import {
  newSpecPage
} from '@stencil/core/testing';

import {
  Tabs
} from './tabs';

describe('nv-tabs', () => {
  it('builds', () => {
    expect(new Tabs()).toBeTruthy();
  });

it('renders', async () => {
    const page = await newSpecPage({
      components: [Tabs],
      html: `<nv-tabs></nv-tabs>`
    });

    expect(page.root).toEqualHtml(`
      <nv-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nv-tabs>
    `)
  });
});
