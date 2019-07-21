import shuffle from 'lodash/shuffle';
import range from 'lodash/range';

export const getRandomPosition = () => shuffle(range(0, 16));
