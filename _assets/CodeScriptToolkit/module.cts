import { Notice } from 'obsidian';

exports.cts = () => {
  const message = 'Require cts';
  new Notice(message);
  console.log(message);
}
