import {
  newSpecPage
} from '@stencil/core/testing';

import {
  Button
} from './button';

describe('nith-button', () => {
  it('builds', () => {
    expect(new Button()).toBeTruthy();
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<nith-button></nith-button>`
    });

    expect(page.root).toEqualHtml(`
      <nith-button class="default">
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
      html: `<nith-button type="primary"></nith-button>`
    });

    expect(page.root).toEqualHtml(`
      <nith-button class="primary" type="primary">
       <mock:shadow-root>
         <button>
           <slot></slot>
         </button>
      </mock:shadow-root>
    `)
  });
});
