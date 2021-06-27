let suspendSSIDs = [ 'TP-LINK_5G_C0A7', 'TP-LINK_C0A7'];
let currentSSID = $network.wifi.ssid;

let isDirectSSID = suspendSSIDs.includes(currentSSID)

$surge.setSelectGroupPolicy('home', isDirectSSID ? 'DIRECT' : 'home_proxy');

$done();