var bs = require("browser-sync").create();

bs.watch(['srezannye-ugly/*.*', 'srezannye-ugly/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./srezannye-ugly"
});