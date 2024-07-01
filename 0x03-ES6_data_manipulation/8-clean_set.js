export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '' || !(set instanceof Set)) {
    return '';
  }

  let result = '';
  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      result += (result === '' ? '' : '-') + item.slice(startString.length);
    }
  }

  return result;
}
