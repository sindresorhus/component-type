/**
 * toString ref.
 */

var toString = Object.prototype.toString;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

module.exports = function(val){
  switch (toString.call(val)) {
    case '[object Date]': return 'date';
    case '[object RegExp]': return 'regexp';
    case '[object Arguments]': return 'arguments';
    case '[object Array]': return 'array';
  }

  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (isNaN(val)) return 'nan';
  if (val && val.nodeType === 1) return 'element';

  return typeof val.valueOf();
};


/**
 * Tests whether the input `val` is `NaN`
 *
 * @param {Mixed} val
 * @return {Boolean}
 * @api private
 */

function isNaN(val) {
  return typeof val === "number" && val !== +val;
}
