const fs = require("fs");
const srcFolder = "C:/Users/Branch/Node/abc-rename-file/srcImage/";
const outFolder = "C:/Users/GoogleD/outFolder/";

var d = new Date();
var curr_date = d.getDate();
var curr_month = d.getMonth() + 1;
var curr_year = d.getFullYear();

var data_f = curr_date + "-" + curr_month + "-" + curr_year;
var myPrefix = "y";
var prefix = myPrefix + data_f;

fs.readdir(srcFolder, (err, files) => {
  files.forEach((file, i) => {
    fs.rename(srcFolder + file, outFolder + i + prefix + ".jpg", err => {
      if (err) throw err;
      console.log("rename completed!");
    });
  });
});
