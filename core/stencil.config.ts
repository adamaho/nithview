import {
  Config
} from '@stencil/core';

import {
  less
} from '@stencil/less';

export const config: Config = {
  namespace: 'nithview',
  bundles: [
    { components: ['nv-button'] },
    { components: ['nv-panel'] },
    { components: ['nv-tabs', 'nv-tab-item'] },
    { components: ['nv-layout', 'nv-layout-header', 'nv-layout-content', 'nv-layout-footer'] }
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme',
      footer: '* NithView *',
      strict: true
    },
    {
      type: 'docs-json',
      file: '../docs/core.json'
    },
    {
      type: 'www'
    }
  ],
  plugins:[
    less()
  ]
};
