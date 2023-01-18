/* eslint-disable max-classes-per-file */
class TestCaseStep {
  constructor(start, finish, result, text, type) {
    this.start = start;
    this.finish = finish;
    this.result = result;
    this.text = text;
    this.type = type;
  }
}

class TestCase {
  constructor(source, gherhinDocument, steps, start, finish, name) {
    this.source = source;
    this.gherhinDocument = gherhinDocument;
    this.steps = steps;
    this.start = start;
    this.finish = finish;
    this.name = name;
  }
}

class TestExecution {
  constructor(meta, start, finish, testCases) {
    this.meta = meta;
    this.start = start;
    this.finish = finish;
    this.testCases = testCases;
  }
}

module.exports = {
  TestCaseStep,
  TestCase,
  TestExecution,
};
