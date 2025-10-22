[Docs](https://github.com/mnaoumov/obsidian-codescript-toolkit/blob/main/docs/esm.md)

```code-button
---
caption: Require ECMAScript modules
---
const { cjs } = require('/module.cjs');
cjs();

const { mjs } = require('/module.mjs');
mjs();

const { jsAsCjs } = require('/moduleAsCjs.js');
jsAsCjs();

const { jsAsMjs } = require('/moduleAsMjs.js');
jsAsMjs();
```
