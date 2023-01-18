const TestDataAggregation = require('./dataAggregation');
const dataModels = require('./dataModels');

module.exports = class TestCaseBuilder {
  constructor(testCaseInfo, DataAggregator = TestDataAggregation) {
    this.testCaseInfo = testCaseInfo;
    this.aggregatedData = new DataAggregator(testCaseInfo).aggregate().data;
  }

  buildExecutionResult() {
    if (!this.aggregatedData) {
      throw new Error('Data in TestCaseBuilder has to be aggregated using aggregateTestCaseInfo() before building executionResult');
    }
    return new dataModels.TestExecution(
      this.aggregatedData.meta,
      this.aggregatedData.start,
      this.aggregatedData.finish,
      this.buildTestCases(),
    );
  }

  buildTestCases() {
    const testCases = [];
    const testCasesMap = new Map(Object.entries(this.aggregatedData.testCases));
    testCasesMap.forEach((testCase, testCaseId) => {
      const { pickleId } = testCase;
      const pickle = this.aggregatedData.pickles[pickleId];
      const source = this.aggregatedData.sources[pickle.uri];
      const gherkinDocument = this.aggregatedData.gherkinDocuments[pickle.uri];
      const start = this.aggregatedData.testCasesStarted[testCaseId];
      const finish = this.aggregatedData.testCasesFinished[testCaseId];
      const steps = this.buildTestCaseSteps(pickle);
      const { name } = pickle;
      testCases.push(new dataModels.TestCase(
        source,
        gherkinDocument,
        steps,
        start,
        finish,
        name,
      ));
    });
    return testCases;
  }

  buildTestCaseSteps(pickle) {
    const steps = [];
    const testCaseStep = this.aggregatedData.testCases[pickle.id];

    pickle.steps.forEach((step) => {
      // First element of this list is testStepID, second is tesetCase mark
      const testStepId = testCaseStep
        .testSteps.filter((x) => !!x.pickleStepId && x.pickleStepId === step.id)[0].id;
      const start = this.aggregatedData.testCasesStepsStarted[testStepId];
      const finish = this.aggregatedData.testCasesStepsFinished[testStepId];
      // Finish entry in message sometimes is not parsed correctly
      const result = finish ? finish.testStepResult : {};
      const { text } = step;
      const { type } = step;
      steps.push(new dataModels.TestCaseStep(
        start.timestamp,
        finish ? finish.timestamp : null,
        result,
        text,
        type,
      ));
    });
    return steps;
  }
};
