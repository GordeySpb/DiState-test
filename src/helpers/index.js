import range from 'lodash/range';
import shuffle from 'lodash/shuffle';

export const getRandomPosition = () => shuffle(range(0, 16));

export const layout = range(0, 16).map((n) => {
  const row = Math.floor(n / 4);
  const col = n % 4;
  return [80 * col, 80 * row];
});
