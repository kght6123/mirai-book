module.exports = {
  title: "Sample Book",
  author: "kght6123 <freelance@kght6123.jp>",
  language: "ja",
  size: "JIS-B5",
  entry: [
    "./dist/index.html",
  ], // `entry` can be `string` or `object` if there's only single markdown file.
  workspaceDir: ".vivliostyle", // directory which is saved intermediate files.
  toc: false, // whether generate and include ToC HTML or not, default to 'false'.
};
