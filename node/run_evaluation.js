const constants = require("../common/constants.js");
const utils = require("../common/utils.js");
const KNN = require("../common/classifiers/knn.js");
const fs = require("fs");

console.info("Running classification...");

const { samples: trainingSamples } = JSON.parse(
  fs.readFileSync(constants.TRAINING)
);

const kNN = new KNN(trainingSamples, 100);

const { sample: testingSamples } = JSON.parse(
  fs.readFileSync(constants.TESTING)
);

let totalCount = 0;
let correctCount = 0;

for (let sample of testingSamples) {
  let { label: predictedLabal } = kNN.predict(sample.point);
  correctCount += predictedLabal == sample.label;
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
