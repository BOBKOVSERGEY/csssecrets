var bs = require("browser-sync").create();

bs.watch(['effect-motirovannogo-stekla/*.*', 'effect-motirovannogo-stekla/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./effect-motirovannogo-stekla"
});