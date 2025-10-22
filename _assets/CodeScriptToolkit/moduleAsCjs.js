import { Notice } from 'obsidian';

exports.jsAsCjs = () => {
  const message = 'Require js as cjs';
  new Notice(message);
  console.log(message);
};
