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
    { components: ['nv-input'] },
    { components: ['nv-layout', 'nv-layout-header', 'nv-layout-content', 'nv-layout-footer'] },
    { components: ['nv-title', 'nv-subtitle', 'nv-body'] },
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme',
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
