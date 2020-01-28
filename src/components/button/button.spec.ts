import {
  newSpecPage
} from '@stencil/core/testing';

import {
  Button
} from './button';

describe('nv-button', () => {
  it('builds', () => {
    expect(new Button()).toBeTruthy();
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<nv-button></nv-button>`
    });

    expect(page.root).toEqualHtml(`
      <nv-button class="default">
       <mock:shadow-root>
         <button>
           <slot></slot>
         </button>
      </mock:shadow-root>
    `)
  });

  it('sets the "type" prop', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<nv-button type="primary"></nv-button>`
    });

    expect(page.root).toEqualHtml(`
      <nv-button class="primary" type="primary">
       <mock:shadow-root>
         <button>
           <slot></slot>
         </button>
      </mock:shadow-root>
    `)
  });
});
