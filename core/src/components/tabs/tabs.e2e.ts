import { newE2EPage } from '@stencil/core/testing';

describe('nv-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nv-tabs></nv-tabs>');

    const element = await page.find('nv-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
