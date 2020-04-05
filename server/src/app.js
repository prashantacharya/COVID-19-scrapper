const scrapper = require('./scrapper');

scrapper('nepal').then((data) => console.log('Nepal: ', data));
  