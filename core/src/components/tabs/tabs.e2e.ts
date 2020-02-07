import {
  newE2EPage
} from '@stencil/core/testing';

describe('nv-tabs', () => {
  it('should render nv-tabs', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <nv-tabs default-selected-tab="test">
        <nv-tab-item tab="test"></nv-tab-item>
      </nv-tabs>
    `);

    const el = await page.find('nv-tabs');
    expect(el).not.toBeNull();
  });

  it('should set the defaultSelectedTab', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <nv-tabs default-selected-tab="test">
        <nv-tab-item tab="test"></nv-tab-item>
      </nv-tabs>
    `);

    const tabItemEl = await page.find('nv-tab-item');

    expect(tabItemEl).toHaveClass('selected');
  });

  it('should change tabs and emit onTabChange event', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <nv-tabs default-selected-tab="test">
        <nv-tab-item tab="test"></nv-tab-item>
        <nv-tab-item class="test1" tab="test1"></nv-tab-item>
      </nv-tabs>
    `);

    const onTabChange = await page.spyOnEvent('tabChange');
    const tabItemEl = await page.find('.test1');
    
    await tabItemEl.click();
    await page.waitForChanges();

    expect(onTabChange).toHaveReceivedEventDetail('test1');
    expect(tabItemEl).toHaveClass('selected');
  });
});

