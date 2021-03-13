const random = require("random");
function randomFunc() {
    for (let i = 0; i < 5; i++){
        console.log(random.int(0,100))
    }
}
module.exports = randomFunc;