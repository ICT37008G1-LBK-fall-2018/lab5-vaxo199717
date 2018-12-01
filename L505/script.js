let deviceType = prompt('Choose device type , "laptop" or "desktop"'),
  getDevices = document.querySelectorAll(`#pc-container > .${deviceType}`);

if (getDevices.length !== 0) {
  getDevices.forEach(device => {
    device.style.backgroundColor = "green";
  });
}