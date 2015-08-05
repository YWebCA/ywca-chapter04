var CustomReporter = require('./spec/reporter')
var Jasmine = require('jasmine')
var jasmine = new Jasmine()

jasmine.loadConfig({
    spec_dir: 'node_modules/ywca-chapter04/spec/',
    spec_files: [
        'spec.js',
        'range_spec.js',
        'array_spec.js',
        'list_spec.js'
    ],
    helpers: [
        'environment.js',
        '../../../chapter04/index.js',
        '../../../chapter04/range.js',
        '../../../chapter04/array.js',
        '../../../chapter04/list.js'
    ]
});

jasmine.addReporter(CustomReporter)

jasmine.execute()