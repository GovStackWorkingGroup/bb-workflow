/* eslint-disable class-methods-use-this */
const PropertyNames = require('./propertyNames');

module.exports = class TestDataAggregation {
  constructor(testCaseInfo) {
    this.testCaseInfo = testCaseInfo;
    this.data = {};
  }

  aggregate() {
    this.clearAggregatedData();
    this.getMeta();
    this.getTestRunTimeInfo();
    this.getPickles();
    this.getSources();
    this.getGherkinDocuments();
    this.getStepDefinitions();
    this.getHooks();
    this.getTestCases();
    this.getTestCasesRuntimeInfo();
    this.getTestCasesStepsRuntimeInfo();
    return this;
  }

  clearAggregatedData() {
    this.data = {};
  }

  getMeta() {
    // There should be only one field with meta property in the testCaseInfo
    this.data.meta = this.filterUniqueTestCaseInfoAttribute(this.testCaseInfo, PropertyNames.META);
  }

  getTestRunTimeInfo() {
    this.data.start = this
      .filterUniqueTestCaseInfoAttribute(this.testCaseInfo, PropertyNames.TEST_RUN_STARTED);
    this.data.stop = this
      .filterUniqueTestCaseInfoAttribute(this.testCaseInfo, PropertyNames.TEST_RUN_FINISHED);
  }

  getPickles() {
    this.data.pickles = this.getGroupedTestCaseAttributeMap(this.testCaseInfo, PropertyNames.PICKLE, 'id');
  }

  getSources() {
    this.data.sources = this.getGroupedTestCaseAttributeMap(this.testCaseInfo, PropertyNames.SOURCE, 'uri');
  }

  getGherkinDocuments() {
    this.data.gherkinDocuments = this.getGroupedTestCaseAttributeMap(this.testCaseInfo, PropertyNames.GHERKIN_DOCUMENT, 'uri');
  }

  getStepDefinitions() {
    this.data.stepCasesDefinitions = this
      .getGroupedBySourceReferenceAndId(this.testCaseInfo, PropertyNames.STEP_DEFINITION);
  }

  getHooks() {
    this.data.stepCasesDefinitions = this
      .getGroupedBySourceReferenceAndId(this.testCaseInfo, PropertyNames.HOOK);
  }

  getTestCases() {
    this.data.testCases = this.getGroupedTestCaseAttributeMap(this.testCaseInfo, PropertyNames.TEST_CASE, 'pickleId');
  }

  getTestCasesRuntimeInfo() {
    this.data.testCasesStarted = this.getGroupedTestCaseAttributeMap(this.testCaseInfo, PropertyNames.TEST_CASE_STARTED, 'testCaseId');
    this.data.testCasesFinished = this.getGroupedTestCaseAttributeMap(this.testCaseInfo, PropertyNames.TEST_CASE_FINISHED, 'testCaseId');
  }

  getTestCasesStepsRuntimeInfo() {
    this.data.testCasesStepsStarted = this.getGroupedTestCaseAttributeMap(this.testCaseInfo, PropertyNames.TEST_STEP_STARTED, 'testStepId');
    this.data.testCasesStepsFinished = this.getGroupedTestCaseAttributeMap(this.testCaseInfo, PropertyNames.TEST_STEP_FINISHED, 'testStepId');
  }

  getGroupedBySourceReferenceAndId(testCaseInfo, attributeName) {
    // Example:
    //  Input: [
    //  {"stepDefinition": {"id": "1", "sourceReference": {"uri": "features/steps/data_read.js"}}},
    //  {"stepDefinition": {"id": "2", "sourceReference": {"uri": "features/steps/data_read.js"}}}
    //  ]
    //  Output: {"features/steps/data_read.js":{
    //  "1":  {"id": "1", "sourceReference": {"uri": "features/steps/data_read.js"}},
    //  "2": {"id": "2", "sourceReference": {"uri": "features/steps/data_read.js"}}
    //  }
    const groupByID = this.getGroupedTestCaseAttributeMap(testCaseInfo, attributeName, 'id');
    const groupByReferenceAndID = {};
    Object.keys(groupByID).forEach((key) => {
      const { uri } = groupByID[key].sourceReference;
      groupByReferenceAndID[uri] = groupByReferenceAndID[uri] ? groupByReferenceAndID[uri] : {};
      groupByReferenceAndID[uri][key] = groupByID[key];
    });
    return groupByReferenceAndID;
  }

  getGroupedTestCaseAttributeMap(testCaseInfo, attributeName, mappingKey) {
    // When there are multilpe entries for one type of attribute this metod
    // aggregate list to map where key is a unique property of the attribute
    // Example:
    //  Input:
    //   testCaseInfo=[
    //    {pickle: {uri: 'feature/testCase.feature'}}, {pickle: {uri: 'feature/otherCase.feature'}}
    //   ]
    //   attributeName='pickle'
    //   mappingKey='uri'
    //  Output: {
    //   'feature/testCase.feature': {uri: 'feature/testCase.feature'},
    //   'feature/otherCase.feature': {uri: 'feature/otherCase.feature'}}
    const listOfMatchingAttributes = this
      .filterTestCaseInfoByElement(testCaseInfo, attributeName, true);
    return this.mapAttributeListToMap(listOfMatchingAttributes, mappingKey);
  }

  mapAttributeListToMap(attributeMap, key, unique = false) {
    // Example:
    // Input: attributeMap=[{'id': 10, 'uri': 'uri', ...}, {'id': 12, 'uri': 'uri', ...}], key=id
    // Output: {10: {'id': 10, 'uri': 'uri', ...}, 12: {'id': 12, 'uri': 'uri', ...}}
    return attributeMap.reduce((map, obj) => {
      if (!!map[obj[key]] && unique) {
        throw new Error(`Attribute ${key} is not unique across attribute list ${attributeMap}.`);
      }
      map[obj[key]] = obj;
      return map;
    }, {});
  }

  filterUniqueTestCaseInfoAttribute(testCaseInfo, attributeName) {
    const attributeList = this.filterTestCaseInfoByElement(testCaseInfo, attributeName);
    this.validateNumberOfElements(attributeList, 1, attributeName);
    return attributeList[0];
  }

  filterTestCaseInfoByElement(testCaseInfo, attributeName) {
    // Message formatter format entries are of the pattern
    // { attributeName: [Object]}
    // This characteristics is used for filtering elements of desired type.
    return testCaseInfo.filter((i) => !!i[attributeName]).map((i) => i[attributeName]);
  }

  validateNumberOfElements(elementsArray, expectedElements, elementType) {
    if (elementsArray.length !== expectedElements) {
      throw new Error(`
                Invalid testCaseInfo format, collection should provide exactly ${expectedElements} element(s) of type ${elementType}.
                It provides ${elementsArray.length}. 
                ${elementsArray}
            `);
    }
  }
};
