var bs = require("browser-sync").create();

bs.watch(['diagram/*.*', 'diagram/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./diagram"
});