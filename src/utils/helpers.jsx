export const isEmpty = (value) =>
  value === null ||
  value === undefined ||
  (Array.isArray(value) && value.length === 0) ||
  (typeof value === "string" && value.trim().length === 0) ||
  (typeof value === "object" && Object.keys(value).length === 0);

// check each key of the objet, if all the key's are empty return true
export const isEmptyObject = (o) =>
  Object.keys(o).reduce(
    (res, k) => res && !(!!o[k] || o[k] === false || !isNaN(parseInt(o[k]))),
    true
  );

// Use BLOB to download a file
export const downloadFile = (filename) => (response) => {
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
};

// @param  {string} base  the base string being concatenated
// @param  {string} param the param that will be concatenated to the base
// @return {string} concatenated string resulting
// @author [Jonathan Rodriguez]
const concatURL = (base, param) => (base += `${param}/`);

/**
 * Concat the url prefix with the passe args
 * Example:
 *    concatURL('/api/book', 'bestsellers', 'genre', 'fantasy')
 *     => '/api/book/bestsellers/genre/fantasy'
 * ?Why?
 * ?  Reduce the amount of repeated url on sagas
 * @param   {string}     prefix Base URL string
 * @returns {function}   Function to pass the URL args
 * @author [Jonathan Rodriguez]
 */
export const baseURL =
  (prefix) =>
  (...args) =>
    args.reduce(concatURL, prefix);

/**
 * Summary. Parse the queryString to an object
 * @param {string} queryString Query string
 * @return {object}  Query params object
 */
export const parseQuery = (queryString) => {
  let query = {};
  let pairs = (
    queryString[0] === "?" ? queryString.substr(1) : queryString
  ).split("&");
  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
};

/**
 * Handle expection on function call
 * @author  Anonymous
 * @param   {function}  fn     function to be called
 * @param   {string}    value  default value if it fails
 * @returns {void} function fn return value
 */
export const getSafe = (fn, value = undefined) => {
  try {
    return fn();
  } catch (e) {
    return value;
  }
};

/**
 * Generate matrix of numrows * numcols with the option of an initial value
 * @author  Anonymous
 * @param   {number}  numrows  # of rows
 * @param   {number}  numcols  # of columns
 * @returns {array} matrix
 */
export const generateMatrix = (numrows, numcols, initial) => {
  let arr = [];
  for (let i = 0; i < numrows; ++i) {
    let columns = [];
    for (let j = 0; j < numcols; ++j) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
};

/**
 * Vanilla JS implementation of pick function of lodash library.
 * Creates an object composed of the object properties predicate returns truthy for.
 * @author  https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_pick
 * @param   {object}   object   original object to be filtered by its keys
 * @param   {array}    keys     keys to be copied to the result object
 * @returns {object} filtered object with only the keys specified
 */

export const pick = (object, keys) => {
  return keys.reduce((obj, key) => {
    // Nested object properties
    if (key.includes(".")) key = key.split(".")[0];
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

/**
 * Generate matrix of numrows * numcols with the option of an initial value
 * @author  Anonymous
 * @param   {string}  phrase  # of caracteres
 * @returns {string} string whit (...)
 */
export const shortTitle = (word) => {
  const substring = word.substring(0, 35);
  const cutText = word.length > 35 ? "..." : "";
  return substring + cutText;
};
