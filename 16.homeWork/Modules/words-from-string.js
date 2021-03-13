function wordsFromString(str) {
    return str.split(" ").filter(x=> !/\W/.test(x)).join(" ");
}
module.exports = wordsFromString;