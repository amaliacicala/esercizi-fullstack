import './script-1.mjs';
import './script-2.mjs';

import { greetingInstance } from './greeting.mjs';

greetingInstance.greet('Amalia');

console.log('index prints:', greetingInstance.greeting);
