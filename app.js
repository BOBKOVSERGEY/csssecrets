var bs = require("browser-sync").create();

bs.watch(['slozhnye-fonovye-usory/*.*', 'slozhnye-fonovye-usory/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./slozhnye-fonovye-usory"
});