Package.describe({
	name: "mrt:q",
    summary: "A wrapper for the Q promise library from kris kowal",
  	version: "1.0.1",
    git: "https://github.com/frozeman/q-meteor.git"
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@0.9.0');

    // EXPORT
    api.export('Q');

    // FILES
    api.addFiles('lib/q-1/q.js', ['client', 'server']);
});