#!/usr/bin/env zx

await Promise.all([$`yarn run check:format`, $`yarn run check:types`]);
