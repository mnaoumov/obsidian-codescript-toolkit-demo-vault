import { Notice } from 'obsidian';

exports.tsAsCts = () => {
  const message = 'Require ts as cts';
  new Notice(message);
  console.log(message);
}
