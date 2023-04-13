const functions = require("firebase-functions");
const { createRequestHandler } = require("remix-google-cloud-functions");

const defaultFunction = functions.region("europe-west2");

const remix = defaultFunction.https.onRequest(
  createRequestHandler({
    build: require("../build"),
  })
);
module.exports = { remix };
