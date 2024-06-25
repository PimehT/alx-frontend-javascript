export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  const allEmployees = [].concat(...departments);

  const iterator = {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < allEmployees.length) {
            const value = allEmployees[index];
            index += 1;
            return { value, done: false };
          }
          return { done: true };
        },
      };
    },
  };

  return iterator;
}
