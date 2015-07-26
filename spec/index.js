var CustomReporter = require('./reporter')
var Jasmine = require('jasmine')
var jasmine = new Jasmine()

jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: [
    'spec.js',
    'range_spec.js',
    'array_spec.js',
    'list_spec.js'
  ],
  helpers: [
    'environment.js',
    'answers/index.js',
    'answers/range.js',
    'answers/array.js',
    'answers/list.js'
  ]
});

jasmine.addReporter(CustomReporter)

jasmine.execute()