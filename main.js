const { Canvas } = require("canvas-constructor");
const { resolve, join } = require("path");
const fetch = require("node-fetch");
const fs = require("fs-extra")

const imageUrl = `https://github.com/${process.env.GITH_USER}.png?size=${process.env.IMAGE_SIZE}`

async function downloadAvatar(url) {
  console.log(`Downloading ${process.env.GITH_USER}.png ...`);
  const _userAvater = await fetch(url);
  if (!_userAvater.ok){
    throw new Error("Faild Image Download");
  }
  let avater_buffer = await _userAvater.buffer();
  let created_image = createCircleImage(avater_buffer);
  fs.writeFileSync(`./${process.env.GITH_USER}.png`, created_image)
}

function createCircleImage(avater){
  return new Canvas(256, 256)
    .addCircle(84, 90, 62)
    .addCircularImage(avater, 128,128,128)
    .save()
    .toBuffer()
}

downloadAvatar(imageUrl);
