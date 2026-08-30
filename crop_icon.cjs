const sharp = require('sharp');
sharp('/tmp/logo.png')
  .extract({ left: 0, top: 0, width: 1327, height: 350 }) // Top half
  .trim()
  .toFile('/tmp/icon_only.png')
  .then(info => console.log('Icon only info:', info))
  .catch(err => console.error(err));
