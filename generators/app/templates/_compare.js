









/***********************    DANGER ZONE DO NOT CROSS    ***********************/
if (typeof Exer === 'undefined') Exer = {};

if (typeof deepEqual !== 'undefined') Exer.deepEqual = deepEqual;
if (typeof deepClone !== 'undefined') Exer.deepClone = deepClone;

if (typeof module === 'undefined') module = {};
module.exports = Exer;
