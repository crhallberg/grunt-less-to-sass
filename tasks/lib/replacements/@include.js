/* README INCLUDING MIXINS : http://sass-lang.com/documentation/file.SASS_REFERENCE.html#including_a_mixin
   .border-radius-bottomleft(@size)
   TO =====>
   @include border-radius-bottomleft($size)
 */
module.exports = {
  pattern: /(\s+)\.([\w\-]*)\s*\((.*)\);/gi,
  replacement: function(match, indent, $2, $3) {
    return indent + '@include ' + $2 + '(' + $3.replace(/;/g, ',') + ');';
  },
  order: 2
};
