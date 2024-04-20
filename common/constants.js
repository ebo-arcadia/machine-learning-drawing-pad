const constants = {};

constants.DATA_DIR = "../data";
constants.RAW_DIR = constants.DATA_DIR + "/raw";
constants.DATASET_DIR = constants.DATA_DIR + "/dataset";
constants.JSON_DIR = constants.DATASET_DIR + "/json";
constants.IMG_DIR = constants.DATASET_DIR + "/img";
constants.SAMPLES = constants.DATASET_DIR + "/samples.json";
constants.FEATURES = constants.DATASET_DIR + "/features.json";
constants.TRAINING = constants.DATASET_DIR + "/training.json";
constants.TESTING = constants.DATASET_DIR + "/testing.json";
constants.NODE_WEBAPP_OBJ = "../common/node_webapp_obj";
constants.SAMPLE_NODE_WEBAPP_OBJ = constants.NODE_WEBAPP_OBJ + "/samples.js";
constants.FEATURES_NODE_WEBAPP_OBJ = constants.NODE_WEBAPP_OBJ + "/features.js";
constants.TRAINING_NODE_WEBAPP_OBJ = constants.NODE_WEBAPP_OBJ + "/training.js";
constants.TESTING_NODE_WEBAPP_OBJ = constants.NODE_WEBAPP_OBJ + "/testing.js";
constants.MIN_MAX_NODE_WEBAPP_OBJ = constants.NODE_WEBAPP_OBJ + "/minMax.js";
constants.DECISION_BOUNDARY = constants.DATASET_DIR + "/decision_boundary.png";

if (typeof module !== "undefined") {
  module.exports = constants;
}
