// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "parser": 'postcss-comment',
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-cssnext": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}
