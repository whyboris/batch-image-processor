const minWidth = 960;
const keepOriginalFilenames = true; // change to `false` if you want files numbered 001, 002, ...

var path = require("path");

const sharp = require("sharp");

const { fdir } = require("fdir");

async function saveFile(input, index) {
  const image = await sharp(input);

  let filename;

  if (keepOriginalFilenames) {
    filename = path.basename(input);
  } else {
    filename = index.toString().padStart(3, "0") + ".jpg";
  }

  image.resize(minWidth).toFile("./output/" + filename, (err, info) => {
    if (err) {
      console.log("ERROR:");
      console.log(err);
    } else {
      console.log(info);
    }
  });
}

async function saveFiles() {
  const api = new fdir().withFullPaths().crawl("./input");
  let files = api.sync();

  // ignore annoying Mac bullshit
  files = files.filter((file) => path.basename(file) !== ".DS_Store");

  let iteration = 1;

  for (const file of files) {
    await saveFile(file, iteration);
    iteration++;
  }
}

saveFiles();
