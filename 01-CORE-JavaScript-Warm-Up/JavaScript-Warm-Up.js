//User Story 1
function lottoTip() {
    let arr = [];
    while (arr.length < 6) {
        let randomNum = Math.floor(Math.random() * 45) + 1;
        if (!arr.includes(randomNum)) {
            arr.push(randomNum);
        }
    }
    return arr.sort((a, b) => a - b);
}
console.log("Lottotipp:",lottoTip());

//User Story 2
function convert(amount) {
    let obj = {};
    let arr = [200, 100, 50, 20, 10, 5, 2, 1];
    let iterate = 0;
    while (iterate < 7) {
        if (amount => arr[iterate]) {
            let count = parseInt(amount/arr[iterate]);
            if (count !== 0) {
                obj[`${arr[iterate]}`] = count;
            }
            amount = amount % arr[iterate];
        }
        iterate++;
    }
    return obj;
}
console.log("Coins:", convert(388));

//User Story 3
function revert(text){
        return((text+"").split('').reverse().join(''));
}
console.log(revert(8888777))