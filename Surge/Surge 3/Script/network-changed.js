let suspendSSIDs = [ 'TP-LINK_5G_C0A7', 'TP-LINK_C0A7'];
let currentSSID = $network.wifi.ssid;

// Disable Enhanced Mode in such Network
$surge.setEnhancedModeEnabled(!suspendSSIDs.includes(currentSSID));

$done();