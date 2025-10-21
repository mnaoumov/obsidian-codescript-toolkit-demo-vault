import { Notice } from 'obsidian';

export function runFromCustomJS() {
  runFrom('CustomJS');
}

export function runFromDatacorejs() {
  runFrom('datacorejs');
}

export function runFromDatacorejsx() {
  runFrom('datacorejsx');
}

export function runFromDatacorets() {
  runFrom('datacorets');
}

export function runFromDatacoretsx() {
  runFrom('datacoretsx');
}

export function runFromDevToolsConsole() {
  runFrom('DevTools Console');
}

function runFrom(from) {
  new Notice(`Run CodeScriptToolkit from ${from}`);
  console.log(`Run CodeScriptToolkit from ${from}`);
}
