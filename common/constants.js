const constants = {};

constants.DATA_DIR = "../data";
constants.RAW_DIR = constants.DATA_DIR + "/raw";
constants.DATASET_DIR = constants.DATA_DIR + "/dataset";
constants.JSON_DIR = constants.DATASET_DIR + "/json";
constants.IMG_DIR = constants.DATASET_DIR + "/img";
constants.SAMPLES = constants.DATASET_DIR + "/samples.json";
constants.FEATURES = constants.DATASET_DIR + "/features.json";
constants.NODE_WEBAPP_OBJ = "../common/node_webapp_obj";
constants.SAMPLE_NODE_WEBAPP_OBJ = constants.NODE_WEBAPP_OBJ + "/samples.js";
constants.FEATURES_NODE_WEBAPP_OBJ = constants.NODE_WEBAPP_OBJ + "/features.js";

if (typeof module !== "undefined") {
  module.exports = constants;
}
