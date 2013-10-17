Package.describe({
    summary: "A tool for making and composing asynchronous promises in JavaScript http://documentup.com/kriskowal/q/"
});

Package.on_use(function (api) {

    // EXPORT
    api.export('Q');

    // FILES
    api.add_files('q.js', ['client', 'server']);
});

// Package.on_test(function (api) {
//   api.use('q');
//   api.use('tinytest');
//   api.add_files('q_tests.js', ['client', 'server']);
// });