const { Jimp } = require('jimp');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'elshaddailogo.png');
const outputPath = path.join(__dirname, 'public', 'elshaddailogo.png');

async function processImage() {
  try {
    const image = await Jimp.read(inputPath);
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      const alpha = this.bitmap.data[idx + 3];

      if (red > 240 && green > 240 && blue > 240) {
        this.bitmap.data[idx + 3] = 0;
      } else if (red > 200 && green > 200 && blue > 200) {
        const maxVal = Math.max(red, green, blue);
        const newAlpha = Math.floor(255 - ((maxVal - 200) * (255 / 55)));
        this.bitmap.data[idx + 3] = Math.min(alpha, newAlpha);
      }
    });

    // Use standard write depending on jimp version
    if (typeof image.writeAsync === 'function') {
      await image.writeAsync(outputPath);
    } else {
      image.write(outputPath);
    }
    console.log('Background removed successfully');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

processImage();
