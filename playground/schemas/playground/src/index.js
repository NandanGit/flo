"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uniqueId_1 = require("./uniqueId");
const keyFormatter = (key, padding = 15) => key.padStart(padding, " ") + " :";
console.log(keyFormatter("User ID"), (0, uniqueId_1.generateCustomId)({
    prefix: "U",
}));
console.log(keyFormatter("Trans ID"), (0, uniqueId_1.generateCustomId)({
    prefix: "T",
    randomBytes: 6,
}));
console.log(keyFormatter("Person ID"), (0, uniqueId_1.generateCustomId)({
    prefix: "P",
    randomBytes: 3,
}));
console.log(keyFormatter("Merch ID"), (0, uniqueId_1.generateCustomId)({
    prefix: "M",
    randomBytes: 4,
}));
