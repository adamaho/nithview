import { newE2EPage } from '@stencil/core/testing';

describe('nv-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nv-layout></nv-layout>');

    const element = await page.find('nv-layout');
    expect(element).toHaveClass('hydrated');
  });
});
