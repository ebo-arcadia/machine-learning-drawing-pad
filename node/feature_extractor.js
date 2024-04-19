const constants = require("../common/constants.js");
const featureFunctions = require("../common/featureFunctions.js");

const fs = require("fs");
const utils = require("../common/utils.js");

console.info("extracting features in progress...");

const samples = JSON.parse(fs.readFileSync(constants.SAMPLES));

for (const sample of samples) {
  const paths = JSON.parse(
    fs.readFileSync(constants.JSON_DIR + "/" + sample.id + ".json")
  );

  const functions = featureFunctions.inUse.map((func) => func.function);
  sample.point = functions.map((func) => func(paths));
}

const minMax = utils.normalizePoints(training.map((s) => s.point));
utils.normalizePoints(
  testing.map((s) => s.point),
  minMax
);

const featureNames = featureFunctions.inUse.map((func) => func.name);

const trainingAmount = samples.length * 0.5;

const training = [];
const testing = [];
for (let i = 0; i < samples.length; i++) {
  if (i < trainingAmount) {
    training.push(samples[i]);
  } else {
    testing.push(samples[i]);
  }
}

fs.writeFileSync(
  constants.FEATURES,
  JSON.stringify({
    featureNames,
    samples: samples.map((sample) => {
      return { point: sample.point, label: sample.label };
    }),
  })
);

fs.writeFileSync(
  constants.FEATURES_NODE_WEBAPP_OBJ,
  `const features=${JSON.stringify({ featureNames, samples })}`
);

fs.writeFileSync(
  constants.MIN_MAX_NODE_WEBAPP_OBJ,
  `const minMax=${JSON.stringify(minMax)};`
);

fs.writeFileSync(
  constants.TRAINING,
  JSON.stringify({
    featureNames,
    samples: training.map((sample) => {
      return { point: sample.point, label: sample.label };
    }),
  })
);

fs.writeFileSync(
  constants.TRAINING_NODE_WEBAPP_OBJ,
  `const training=${JSON.stringify({ featureNames, samples: training })}`
);

fs.writeFileSync(
  constants.TESTING,
  JSON.stringify({
    featureNames,
    samples: testing.map((sample) => {
      return { point: sample.point, label: sample.label };
    }),
  })
);

fs.writeFileSync(
  constants.TESTING_NODE_WEBAPP_OBJ,
  `const testing=${JSON.stringify({ featureNames, samples: testing })}`
);

console.info("features extracted completed!");
