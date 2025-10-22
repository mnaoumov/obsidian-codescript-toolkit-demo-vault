import { Notice } from 'obsidian';

export function run() {
  const message = 'Require system root path';
  new Notice(message);
  console.log(message);
}
