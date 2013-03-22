
/**
 * refs
 */

var toString = Object.prototype.toString;
var Element = typeof window != 'undefined' ? window.Element : Function;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

module.exports = function(v){
  var type = types[toString.call(v)]
  if (type) return type
  if (v instanceof Element) return 'element';

  return typeof v;
};

var types = {
  '[object Function]': 'function',
  '[object Date]': 'date',
  '[object RegExp]': 'regexp',
  '[object Arguments]': 'arguments',
  '[object Array]': 'array',
  '[object String]': 'string',
  '[object Null]': 'null',
  '[object Undefined]': 'undefined',
  '[object Number]': 'number',
  '[object Boolean]': 'boolean',
}
