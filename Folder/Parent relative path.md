[Docs](https://github.com/mnaoumov/obsidian-codescript-toolkit/blob/main/docs/relative-path.md)

```code-button
---
caption: Require parent relative path
---
const { run } = require('../_assets/CodeScriptToolkit/parentRelativePath.js');
run();
```

```code-button
---
caption: Require parent relative path with custom parent path
---
const { run } = require('../_assets/CodeScriptToolkit/parentRelativePathWithCustomParentPath.js', { parentPath: 'Folder/Parent relative path.md' });
run();
```
