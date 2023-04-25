export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  count += 1;

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, count);
  }
}

try {
  queryAPI(endpoint);
  console.log(weakMap.get(endpoint));

  queryAPI(endpoint);
  console.log(weakMap.get(endpoint));

  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint);
  queryAPI(endpoint);
} catch (error) {
  console.log(error.message);
}
