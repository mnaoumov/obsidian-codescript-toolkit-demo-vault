# [`dataviewjs`](https://blacksmithgu.github.io/obsidian-dataview/api/intro/) scripts

## Run `CodeScript Toolkit` from `Dataview`

```dataviewjs
const button = dv.el('button', 'Run CodeScript Toolkit from Dataview');
button.addEventListener('click', () => {
  require('/integrateWithOtherPlugins').runFromDataviewjs();
});
```

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
