---
module:
  language: TypeScript
---

```TypeScript
export function runFromCodeScriptToolkit() {
  new Notice('Run CustomJS from CodeScriptToolkit');
  console.log('Run CustomJS from CodeScriptToolkit');
}

export function runCodeScriptToolkit() {
  const { runFromModules } = require('/integrateWithOtherPlugins.js');
  runFromModules();
}
```
