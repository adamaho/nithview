/* eslint-disable */
import { defineCustomElements, applyPolyfills } from '@nithview/core/loader';

applyPolyfills().then(() => {
  defineCustomElements(window);
});