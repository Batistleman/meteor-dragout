Package.describe({
  summary: "This package adds the dragout event to meteor."
});

Package.on_use(function (api, where) {
	api.use('jquery', 'client');
	api.add_files('meteor-dragout.js', 'client');
});