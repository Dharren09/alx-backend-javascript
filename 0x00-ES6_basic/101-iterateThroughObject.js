export default function iterateThroughObject(reportWithIterator) {
  let employeesString = '';
  for (const item of reportWithIterator) {
    employeesString += item + ' | ';
  }
  return employeesString.slice(0, -3);
}
