const constants = {};

constants.DATA_DIR = "../data";
constants.RAW_DIR = constants.DATA_DIR + "/raw";
constants.DATASET_DIR = constants.DATA_DIR + "/dataset";
constants.JSON_DIR = constants.DATASET_DIR + "/json";
constants.IMG_DIR = constants.DATASET_DIR + "/img";
constants.SAMPLES = constants.DATASET_DIR + "/samples.json";
constants.NODE_WEBAPP_OBJ = "../common/node_webapp_obj";
constants.SAMPLE_NODE_WEBAPP_OBJ = constants.NODE_WEBAPP_OBJ + "/samples.js";

const fs = require("fs");

if (typeof module !== "undefined") {
  module.exports = constants;
}
