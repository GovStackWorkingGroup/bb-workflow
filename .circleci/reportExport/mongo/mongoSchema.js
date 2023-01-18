module.exports = {
  buildingBlock: { type: 'string' },
  testedApplication: { type: 'string' },
  meta: {
    protocolVersion: {
      type: 'String',
    },
    implementation: {
      version: {
        type: 'String',
      },
      name: {
        type: 'String',
      },
    },
    cpu: {
      name: {
        type: 'String',
      },
    },
    os: {
      name: {
        type: 'String',
      },
      version: {
        type: 'String',
      },
    },
    runtime: {
      name: {
        type: 'String',
      },
      version: {
        type: 'String',
      },
    },
  },
  start: {
    timestamp: {
      seconds: {
        type: 'Number',
      },
      nanos: {
        type: 'Number',
      },
    },
  },
  testCases: [{
    source: {
      data: {
        type: 'String',
      },
      uri: {
        type: 'String',
      },
      mediaType: {
        type: 'String',
      },
    },
    gherhinDocument: {
      feature: {
        tags: {
          type: 'Array',
        },
        location: {
          line: {
            type: 'Number',
          },
          column: {
            type: 'Number',
          },
        },
        language: {
          type: 'String',
        },
        keyword: {
          type: 'String',
        },
        name: {
          type: 'String',
        },
        description: {
          type: 'String',
        },
        children: {
          type: [
            'Mixed',
          ],
        },
      },
      comments: {
        type: 'Array',
      },
      uri: {
        type: 'String',
      },
    },
    steps: {
      type: [
        'Mixed',
      ],
    },
    name: {
      type: 'String',
    },
  }],
};
