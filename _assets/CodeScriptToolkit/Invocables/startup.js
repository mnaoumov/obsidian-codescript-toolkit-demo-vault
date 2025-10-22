import { Notice } from 'obsidian';

export function invoke() {
  const message = 'Startup invoke';
  new Notice(message);
  console.log(message);
}

export function cleanup() {
  const message = 'Startup cleanup';
  new Notice(message);
  console.log(message);
}
