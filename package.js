Package.describe({
  summary: "This package adds the dragout event to meteor."
});

Package.on_use(function (api, where) {
  api.add_files('meteor-dragout.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('meteor-dragout');

  api.add_files('meteor-dragout_tests.js', ['client', 'server']);
});
