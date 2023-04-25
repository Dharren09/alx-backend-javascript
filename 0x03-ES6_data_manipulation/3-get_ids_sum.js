export default function getStudentIdsSum(myArray) {
  return myArray.reduce((accumulator, obj) => (accumulator + obj.id), 0);
}
