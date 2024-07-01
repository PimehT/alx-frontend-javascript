export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }

  return Array
    .from(set)
    .filter((x) => x.startsWith(startString))
    .map((x) => x.slice(startString.length))
    .join('-');
}
