export const endpoint = (process.env.NODE_ENV === 'production') ?
                        '/' : 'http://localhost:8080/';

export function filterObject(object, byKey, values) {
  let _object = {};
  Object.keys(object).forEach(id => {
    if (values.includes(object[id][byKey])) {
      _object[id] = object[id];
    }
  });
  return _object;
}
