var bs = require("browser-sync").create();

bs.watch(['poluprozrachnue-ramki/*.*', 'poluprozrachnue-ramki/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./poluprozrachnue-ramki"
});