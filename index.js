// usage: https://github.com/jaywcjlove/svgtofont

const svgtofont = require("svgtofont");
const path = require("path");
const { NONAME } = require("dns");

svgtofont({
  src: path.resolve(process.cwd(), "svg"),
  dict: path.resolve(process.cwd(), "fonts"),
  fontName: "iqor-icon",
  classNamePrefix: "icn",
  css: true,
  startUnicode: 0x0041,
  svgicons2svgfont: {
    fontHeight: 1024,
    normalize: true,
    centerHorizontally: true,
  },
  website: {
    template: path.join(process.cwd(), "/website/index.ejs"),
    title: "IQOR-ICON",
    logo: null,
    version: "Version 0.2",
  },
}).then(() => {
  console.log("svg to font complete.");
});
