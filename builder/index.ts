console.time('app');
import { Builder } from "./builder";

Builder('md');

Builder('html');

console.timeEnd('app');
