// Minimal usage: load compiled addon and call hello()
const addon = require('./build/Release/hello.node');
console.log(addon.hello());
