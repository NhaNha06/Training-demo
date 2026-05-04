const inputNum = document.getElementById("convertNum");
const resNum = document.getElementById("resultNum");
const inputOpt = document.getElementById("inputConcur");
const resultOpt = document.getElementById("resultConcur");
const btnSwitch = document.getElementById("btnSwitch");
const btnConvert = document.getElementById("btnConvert");

const ratioConcurrency = {
    VND : 1,
    USD : 27000,
    AUD : 18000,
    EUR : 25000
};

function convertToVND (amount) {
    return amount * ratioConcurrency[inputOpt.value];
}

function convertToRes (amount) {
    return convertToVND(amount) / ratioConcurrency[resultOpt.value];
}

function validInput () {

}

btnConvert.addEventListener('click', function() {
    let amount = parseFloat(inputNum.value);
    let result = convertToRes(amount);
    resNum.value = result.toFixed(2);
});

btnSwitch.addEventListener('click', function() {
    const temp = inputOpt.value;
    inputOpt.value = resultOpt.value;
    resultOpt.value = temp;
    btnConvert.click();
});