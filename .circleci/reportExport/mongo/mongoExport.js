const mongoose = require('mongoose');
const path = require('path');
const ExportFunc = require('../utils/export');
const mongooseSchema = require('./mongoSchema');

require('dotenv').config();

async function loadDatabaseConnection() {
  const connectionDetails = {
    username: process.env.MONGO_USERNAME,
    passwd: process.env.MONGO_PASSOWORD,
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    databaseName: process.env.MONGO_DATABASE,
  };

  const undefinedFields = Object.keys(connectionDetails)
    .filter((item) => connectionDetails[item] === undefined);

  if (undefinedFields.length > 0) {
    throw new Error(`Some of mandatory environmental variables are missing [${undefinedFields}]`);
  }
  return connectionDetails;
}

function addExecutionInfoToData(data) {
  const buildingBlock = process.env.BUILDING_BLOCK ? process.env.BUILDING_BLOCK : 'undefined-bb';
  const testApplication = process.env.TESTED_APPLICATION ? process.env.TESTED_APPLICATION : 'undefined-application';

  data.buildingBlock = buildingBlock;
  data.testedApplication = testApplication;
  return data;
}

async function jsonExport(data) {
  data = addExecutionInfoToData(data);
  const connection = await loadDatabaseConnection();

  await mongoose.connect(
    `mongodb://${connection.host}:${connection.port}/${connection.databaseName}`,
    { user: connection.username, pass: connection.passwd },
  );

  const schema = new mongoose.Schema(mongooseSchema);
  const TestExecution = mongoose.model('TestExecution', schema);
  const testResult = new TestExecution(data);
  await testResult.save();
}

async function exportTestResult() {
  const source = path.resolve(__dirname, `${process.env.TEST_RESULTS_PATH}${process.env.TEST_RESULT_REPORT_FILENAME}`);
  console.log(`Exporting report data from ${source}...`);
  console.log('----------------------');
  await new ExportFunc(source, jsonExport).exportData();
  mongoose.disconnect();
  console.log('----------------------');
  console.log('Data export finished.');
}

exportTestResult();
