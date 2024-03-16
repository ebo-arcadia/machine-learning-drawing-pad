draw = require("../common/draw.js");
const { createCanvas } = require("canvas");
const canvas = createCanvas(400, 400);
const context = canvas.getContext("2d");
const constants = {};

constants.DATA_DIR = "../data";
constants.RAW_DIR = constants.DATA_DIR + "/raw";
constants.DATASET_DIR = constants.DATA_DIR + "/dataset";
constants.JSON_DIR = constants.DATASET_DIR + "/json";
constants.IMG_DIR = constants.DATASET_DIR + "/img";
constants.SAMPLES = constants.DATASET_DIR + "/samples.json";

const fs = require("fs");

const fileNames = fs.readdirSync(constants.RAW_DIR);
const samples = [];
let id = 1;
fileNames.forEach((fn) => {
  const content = fs.readFileSync(constants.RAW_DIR + "/" + fn);
  const { session, user, drawings } = JSON.parse(content);
  for (let item in drawings) {
    samples.push({
      id,
      item,
      user_name: user,
      user_id: session,
    });
    paths = drawings[item];
    fs.writeFileSync(
      constants.JSON_DIR + "/" + id + ".json",
      JSON.stringify(paths)
    );

    generateImageFile(constants.IMG_DIR + "/" + id + ".png", paths);
    id++;
  }
});

function generateImageFile(outFile, paths) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  draw.path(context, paths);
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync(outFile, buffer);
}
