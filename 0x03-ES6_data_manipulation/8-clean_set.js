export default function cleanSet(set, startString) {
  if (startString.length === 0
    || !startString || !(set instanceof Set)
    || typeof startString !== 'string'
  ) {
    return '';
  }

  return Array
    .from(set)
    .filter((x) => x.startsWith(startString))
    .map((x) => x.slice(startString.length))
    .join('-');
}
