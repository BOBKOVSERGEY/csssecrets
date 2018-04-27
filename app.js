var bs = require("browser-sync").create();

bs.watch(['text/*.*', 'text/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./text"
});