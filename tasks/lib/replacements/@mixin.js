/* README MIXINS : http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins
  .border-radius-bottomleft (@size) {
   TO =====>
   @mixin border-radius-bottomleft($size) {
 */
module.exports = {
  pattern: /\.([\w\-]*)\s*\((.*)\)\s*\{/gi,
  replacement: function (match, $1, $2) {
    return '@mixin ' + $1 + '(' + $2.replace(/;/g, ',') + ') {';
  },
  order: 2
};
