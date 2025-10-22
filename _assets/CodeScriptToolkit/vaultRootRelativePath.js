import { Notice } from 'obsidian';

export function run() {
  const message = 'Require vault-root-relative path';
  new Notice(message);
  console.log(message);
}
