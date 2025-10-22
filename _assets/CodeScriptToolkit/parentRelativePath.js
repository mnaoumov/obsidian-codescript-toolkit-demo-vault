import { Notice } from 'obsidian';

export function run() {
  const message = 'Require parent relative path';
  new Notice(message);
  console.log(message);
}
