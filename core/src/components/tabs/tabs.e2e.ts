import { newE2EPage } from '@stencil/core/testing';

describe('example', () => {
  it('should render a foo-component', async () => {
    const page = await newE2EPage();
    await page.setContent(`<nv-tabs><nv-tabs/>`);
    const el = await page.find('nv-tabs');
    expect(el).not.toBeNull();
  });
});

