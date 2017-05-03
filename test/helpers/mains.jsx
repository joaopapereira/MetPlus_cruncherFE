/* eslint-disable */
import 'babel-polyfill';

const testsContext = require.context('./', true, /\.tests\.js(x?)$/);
testsContext.keys().forEach(testsContext);