export default function getStudentsByLocation(array, city) {
  return array instanceof Array
    ? array.filter((x) => x.location === city)
    : [];
}
