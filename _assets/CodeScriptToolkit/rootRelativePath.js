import { Notice } from 'obsidian';

export function run() {
  const message = 'Require root-relative path';
  new Notice(message);
  console.log(message);
}
