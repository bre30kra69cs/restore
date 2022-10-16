#!/usr/bin/env zx

await Promise.all([
  $`yarn run check:format`,
  $`yarn run check:lint`,
  $`yarn run check:tests`,
  $`yarn run check:types`,
]);
