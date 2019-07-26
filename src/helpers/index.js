import shuffle from 'lodash/shuffle';
import range from 'lodash/range';

export const getRandomPosition = () => shuffle(range(0, 16)); // TODO функция shuffle точно перемешает так, что потом мы сможем собрать всё обратно?
