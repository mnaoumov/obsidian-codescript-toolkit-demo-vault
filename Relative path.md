[Docs](https://github.com/mnaoumov/obsidian-codescript-toolkit/blob/main/docs/relative-path.md)

```code-button
---
caption: Require relative path
---
const { run } = require('./_assets/CodeScriptToolkit/relativePath.js');
run();
```

```code-button
---
caption: Require relative path with custom parent path
---
const { run } = require('./_assets/CodeScriptToolkit/relativePathWithCustomParentPath.js', { parentPath: 'Relative path.md' });
run();
```

See also [[Parent relative path]].
