// require('babel-register')();


// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

// const { document } = (new JSDOM(`...`)).window;



// //var jsdom = require('jsdom').jsdom;

// var exposedProperties = ['window', 'navigator', 'document'];

// //global.document = jsdom('');
// global.document = document;
// global.window = document.defaultView;
// Object.keys(document.defaultView).forEach((property) => {
//   if (typeof global[property] === 'undefined') {
//     exposedProperties.push(property);
//     global[property] = document.defaultView[property];
//   }
// });

// global.navigator = {
//   userAgent: 'node.js'
// };

// documentRef = document;
