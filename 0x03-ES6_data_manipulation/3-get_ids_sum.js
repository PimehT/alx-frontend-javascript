export default function getStudentIdsSum(array) {
  return array
    .map((x) => x.id)
    .reduce((x, y) => x + y);
}
