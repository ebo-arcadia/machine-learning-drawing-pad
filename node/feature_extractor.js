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

const minMax = utils.normalizePoints(samples.map((s) => s.point));

const featureNames = featureFunctions.inUse.map((func) => func.name);

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

console.info("features extracted completed!");
