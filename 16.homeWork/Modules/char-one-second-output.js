function charOneSecondOutput(word) {
    for (let i = 0; i < word.length; i++) {
        setTimeout(function () {
            console.log(word[i]);
        },1000 * i);
    }
}
module.exports = charOneSecondOutput;