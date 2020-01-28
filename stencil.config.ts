import {
  Config
} from '@stencil/core';

import {
  less
} from '@stencil/less';

export const config: Config = {
  namespace: 'nithview',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www'
    }
  ],
  globalStyle: 'src/global/variables.css',
  plugins: [
    less()
  ]
};
