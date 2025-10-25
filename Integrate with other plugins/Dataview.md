# [`dataviewjs`](https://blacksmithgu.github.io/obsidian-dataview/api/intro/) scripts

## Run `CodeScript Toolkit` from `Dataview`

```dataviewjs
const button = dv.el('button', 'Run CodeScript Toolkit from Dataview');
button.addEventListener('click', () => {
  const { runFromDataviewjs } = require('/integrateWithOtherPlugins.js');
  runFromDataviewjs();
});
```

> [!WARNING] Mobile support
>
> `require()` calls in `dataviewjs` on Mobile bypass `CodeScript Toolkit` plugin and most of its features will not work there.
>
> E.g., `require('/integrateWithOtherPlugins.js')` from the example above, will just return `undefined`, leading to the hard-to-detect errors.
>
> See [docs](https://github.com/mnaoumov/obsidian-codescript-toolkit/blob/main/docs/new-functions.md#migrate-to-async) to adjust the code examples to work on mobile. 

## Run `Dataview` from `CodeScript Toolkit`

```code-button
---
caption: Run Dataview from CodeScript Toolkit
---
import { Notice } from 'obsidian';
const message = 'Run Dataview from CodeScript Toolkit. See page object in the console';
new Notice(message);
console.log(message);
const page = DataviewAPI.page(app.workspace.getActiveFile().path);
console.log(page);
```
