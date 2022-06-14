const { textConvert, textStats } = require('/home/semos/nodejs/Nodejs/c3/vezba.js');
// let original = 'NODE JS e dobar programski jazik';
// let conv = textConvert('lat2cyr', original);

// console.log(original);
// console.log(conv);

let original = 'немам поима од ноде јс';
let conv = textConvert('cyr2lat', original);

console.log(original);
console.log(conv);


const randomText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra at sem in bibendum. Quisque et nulla ex. Etiam sem enim, mollis et lobortis vitae, tristique quis nisl. Suspendisse eu justo aliquet justo scelerisque maximus. Phasellus a neque nisl. Etiam congue ligula sit amet aliquet viverra. Nunc a arcu ornare, maximus neque at, ornare turpis. Pellentesque iaculis volutpat mi, in placerat sem posuere id.';

let stats = textStats(randomText);
console.log(stats);

