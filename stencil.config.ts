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
      type: 'docs-readme',
      footer: '**',
    },
    {
      type: 'www'
    }
  ],
  globalStyle: 'src/global/variables.less',
  plugins: [
    less({
      injectGlobalPaths: ['src/global/variables.less']
    })
  ]
};
