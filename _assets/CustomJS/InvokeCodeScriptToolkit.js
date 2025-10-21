class InvokeCodeScriptToolkit {
  invoke() {
    const integrateModule = require('/integrateWithOtherPlugins.js');
    integrateModule.runFromCustomJS();
  }
}
