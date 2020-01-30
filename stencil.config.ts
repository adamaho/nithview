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
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme',
      footer: '**',
    },
    {
      type: 'www'
    }
  ],
  plugins:[
    less()
  ]
};
