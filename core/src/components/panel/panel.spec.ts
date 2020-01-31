import {
  newSpecPage
} from '@stencil/core/testing';

import {
  Panel
} from './panel';

describe('nv-card', () => {
it('builds', () => {
    expect(new Panel()).toBeTruthy();
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [Panel],
      html: `<nv-panel></nv-panel>`
    });

    expect(page.root).toEqualHtml(`
      <nv-panel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nv-panel>
    `)
  });

  it('sets the "clickable" prop', async () => {
    const page = await newSpecPage({
      components: [Panel],
      html: `<nv-panel clickable></nv-panel>`
    });

    expect(page.root).toEqualHtml(`
      <nv-panel class="clickable" clickable="">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nv-panel>
    `)
  });
});
