const constants = require("../common/constants.js");
const utils = require("../common/utils.js");
const KNN = require("../common/classifiers/knn.js");
const fs = require("fs");

console.info("Running classification...");

const { samples: trainingSamples } = JSON.parse(
  fs.readFileSync(constants.TRAINING)
);

const kNN = new KNN(trainingSamples, 100);

const { samples: testingSamples } = JSON.parse(
  fs.readFileSync(constants.TESTING)
);

let totalCount = 0;
let correctCount = 0;

for (let sample of testingSamples) {
  let { label: predictedLabel } = kNN.predict(sample.point);
  correctCount += predictedLabel == sample.label;
  totalCount++;
}

console.info(
  "Classifier accuracy: " +
    correctCount +
    "/" +
    totalCount +
    "(" +
    utils.formatPercent(correctCount / totalCount) +
    ")"
);

console.log("generate decision boundary begins ...");

const { createCanvas } = require("canvas");
const canvas = createCanvas(400, 400);
const ctx = canvas.getContext("2d");

for (let x = 0; x < canvas.width; x++) {
  for (let y = 0; y < canvas.height; y++) {
    let point = [x / canvas.width, 1 - y / canvas.height];
    const { label } = kNN.predict(point);
    const color = utils.styles[label].color;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);
  }
}

const buffer = canvas.toBuffer("image/png");
fs.writeFileSync(constants.DECISION_BOUNDARY, buffer);

console.info("generate decision boundary completed");
