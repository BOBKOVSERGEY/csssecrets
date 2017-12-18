var bs = require("browser-sync").create();

bs.watch(['filters/*.*', 'filters/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./filters"
});