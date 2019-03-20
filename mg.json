// noprotect これはJSBinでasync awaitを使うためのおまじない
var magnetPort,switchPort; // magnetとスイッチの付いているポート
initGPIO();
function magnetOnOff(v){
    if(v === 0){
        magnetPort.write(0);
    } else {
        magnetPort.write(1);
    }
}
async function initGPIO(){
    var gpioAccess = await navigator.requestGPIOAccess();
    magnetPort = gpioAccess.ports.get(21); // magnetのPort
    await magnetPort.export("out");
    switchPort = gpioAccess.ports.get(5); // タクトスイッチのPort
    await switchPort.export("in");
    switchPort.onchange = function(val){
        // Port 5の状態を読み込む  
        val ^= 1; // switchはPullupなのでOFFで1。magnetはOFFで0なので反転させる
        magnetOnOff(val);
    }
}