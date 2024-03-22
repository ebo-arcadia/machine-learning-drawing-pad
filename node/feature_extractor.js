const constants = require("../common/constants.js");
const features = require("../common/features.js");

const fs = require("fs");

console.info("extracting features in progress...");

const samples = JSON.parse(fs.readFileSync(constants.SAMPLES));

for (const sample of samples) {
  const paths = JSON.parse(
    fs.readFileSync(constants.JSON_DIR + "/" + sample.id + ".json")
  );
  sample.point = [features.getPathCount(paths), features.getPointCount(paths)];
}

const featureNames = ["Path Count", "Point Count"];

fs.writeFileSync(
  constants.FEATURES,
  JSON.stringify({
    featureNames,
    samples: samples.map((sample) => {
      return { point: sample.point, item: sample.item };
    }),
  })
);

fs.writeFileSync(
  constants.FEATURES_NODE_WEBAPP_OBJ,
  `const features=${JSON.stringify({ featureNames, samples })}`
);

console.info("features extracted completed!");
