var CustomReporter = require('./spec/reporter')
var Jasmine = require('jasmine')
var jasmine = new Jasmine()

jasmine.loadConfig({
    spec_dir: 'node_modules/ywca-chapter03/spec/',
    spec_files: [
        'spec.js',
        'range_spec.js',
        'array_spec.js',
        'list_spec.js'
    ],
    helpers: [
        'environment.js',
        '../../../chapter03/index.js',
        '../../../chapter03/range.js',
        '../../../chapter03/array.js',
        '../../../chapter03/list.js'
    ]
});

jasmine.addReporter(CustomReporter)

jasmine.execute()