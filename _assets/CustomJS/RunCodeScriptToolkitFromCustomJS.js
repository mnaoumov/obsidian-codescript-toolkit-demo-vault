class RunCodeScriptToolkitFromCustomJS {
  invoke() {
    const integrateModule = require('/integrateWithOtherPlugins.js');
    integrateModule.runFromCustomJS();
  }
}
