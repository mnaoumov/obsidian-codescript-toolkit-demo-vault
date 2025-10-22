# [`Templater`](https://silentvoid13.github.io/Templater/) scripts

## Run `CodeScript Toolkit` from `Templater`

Invoke `Templater: Open insert template modal` → `RunCodeScriptToolkitFromTemplater` command.

## Run `Templater` from `CodeScript Toolkit`

```code-button
---
caption: Run Dataview from CodeScript Toolkit
---
const message = 'Run Templater from CodeScript Toolkit. See parsed template in the console';
new Notice(message);
console.log(message);
const templateFile = app.vault.getFileByPath('_assets/Templater/TestTemplate.md');;
const template = await app.plugins.plugins['templater-obsidian'].templater.read_and_parse_template({
  run_mode: 4,
  target_file: templateFile,
  template_file: templateFile
});
console.log(template);
```
