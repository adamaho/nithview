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
      <nv-button class="nv-button-default">
        <mock:shadow-root>
          <button>
            <slot></slot>
          </button>
        </mock:shadow-root>
      </nv-button>
    `)
  });

it('sets the "type" prop', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<nv-button type="primary"></nv-button>`
    });

    expect(page.root).toEqualHtml(`
      <nv-button class="nv-button-primary" type="primary">
        <mock:shadow-root>
          <button>
            <slot></slot>
          </button>
        </mock:shadow-root>
      </nv-button>
    `)
  });

it('sets the "disabled" prop', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<nv-button type="primary" disabled="true"></nv-button>`
    });

    expect(page.root).toEqualHtml(`
      <nv-button class="nv-button-primary" type="primary" disabled="true">
        <mock:shadow-root>
          <button disabled="">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </nv-button>
    `)
  });

  it('sets the "loading" prop', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<nv-button type="primary" loading="true"></nv-button>`
    });

    expect(page.root).toEqualHtml(`
      <nv-button class="nv-button-primary nv-button-loading" type="primary" loading="true">
        <mock:shadow-root>
          <button disabled="">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </nv-button>
    `)
  });

it('sets renders content to the slot', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<nv-button type="primary">test</nv-button>`
    });

    expect(page.root).toEqualHtml(`
      <nv-button class="nv-button-primary" type="primary">
        <mock:shadow-root>
          <button>
            <slot></slot>
          </button>
         </mock:shadow-root>
         test
      </nv-button>
    `)
  });

});
