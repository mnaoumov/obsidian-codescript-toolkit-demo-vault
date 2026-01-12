[Docs](https://github.com/mnaoumov/obsidian-codescript-toolkit/blob/main/docs/codescript-toolkit.md)

## registerTempPlugin

```code-button
---
caption: 'registerTempPlugin from codescript-toolkit'
---
const { registerTempPlugin } = require('codescript-toolkit');
const { Plugin } = require('obsidian');

class RequireCodescriptToolkitModulePlugin extends Plugin {
  onload() {
    new Notice('registerTempPlugin from codescript-toolkit');
  }
}

const cssText = '* { color: red; }';

registerTempPlugin(RequireCodescriptToolkitModulePlugin, cssText);
```

## unregisterTempPlugin

```code-button
---
caption: 'unregisterTempPlugin from codescript-toolkit'
---
const { unregisterTempPlugin } = require('codescript-toolkit');

unregisterTempPlugin('RequireCodescriptToolkitModulePlugin');
```