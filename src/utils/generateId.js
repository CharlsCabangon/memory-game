export function generateUniqueRandomIds(count, max = 898) {
  const ids = new Set();

  while (ids.size < count) {
    ids.add(Math.floor(Math.random() * max) + 1);
  }
  return Array.from(ids);
}
