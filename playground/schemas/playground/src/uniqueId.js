"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCustomId = void 0;
const crypt = require("crypto");
function generateCustomId({ prefix = "ID", suffix = "", separator = "-", randomBytes = 2, uppercase = true, convertToHex = true, }) {
    if (prefix.length > 4)
        throw new Error("Prefix too long");
    if (suffix.length > 4)
        throw new Error("Suffix too long");
    if (prefix.includes(separator))
        throw new Error(`Prefix should not contain separator (${separator})`);
    if (suffix.includes(separator))
        throw new Error(`Suffix should not contain separator (${separator})`);
    const timestamp = Math.floor(Date.now() / 1000); // UNIX timestamp in seconds
    let randomComponent = crypt
        .randomBytes(randomBytes)
        .toString(convertToHex ? "hex" : "base64");
    if (uppercase)
        randomComponent = randomComponent.toUpperCase();
    let customId = `${prefix}${separator}${timestamp}${separator}${randomComponent}`;
    if (suffix)
        customId += `${separator}${suffix}`;
    return customId; // Example: "U-1612345678-ABCD"
}
exports.generateCustomId = generateCustomId;
