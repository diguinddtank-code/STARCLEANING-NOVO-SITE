const sharp = require('sharp');
sharp('/tmp/downloaded_logo.png')
  .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toFile('app/icon.png')
  .then(info => console.log('Saved to app/icon.png:', info))
  .catch(err => console.error(err));
