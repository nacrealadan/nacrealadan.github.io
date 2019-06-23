function bt() {
 
  if (!('bluetooth' in navigator)) {
    $target.innerText = 'Bluetooth API not supported.';
    return;
  }
  
  navigator.bluetooth.requestDevice()
    .then(function (device) {
      return device.gatt.connect();
    })
    .catch(function (error) {
      $target.innerText = error;
    });
}
