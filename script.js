function checkArmstrong() {
    let num = document.getElementById("num").value;
    let originalNum = num;
    let sum = 0;
    let digits = num.length;

    while (num > 0) {
        let rem = num % 10;
        sum += Math.pow(rem, digits);
        num = Math.floor(num / 10);
    }

    let result = document.getElementById("result");

    if (sum == originalNum) {
        result.innerHTML = originalNum + " is an Armstrong Number";
    } 
    else {
        result.innerHTML = originalNum + " is Not an Armstrong Number";
    }
}