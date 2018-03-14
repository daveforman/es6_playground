import addHeaderToDom from './helpers';

import logFunction, {add, subtract, multiply, divide} from './math';

logFunction();

addHeaderToDom("3 + 7= " + add(3,7));

addHeaderToDom("3 - 7= " + subtract(3,7));

addHeaderToDom("3 * 7= " + multiply(3,7));

addHeaderToDom("3 / 7= " + divide(3,7));


