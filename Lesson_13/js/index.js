document.addEventListener("DOMContentLoaded", function() {
    var calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', calculate);
});

function calculate() {
    let fromAmount = parseFloat(document.getElementById('fromAmount').value);
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;
    let exchangeRate = 1.5; // Ваш реальный курс обмена здесь

    let toAmount;
    if (fromCurrency === toCurrency) {
        toAmount = fromAmount;
    } else {
        toAmount = fromAmount * exchangeRate;
    }

    document.getElementById('toAmount').value = toAmount.toFixed(2);
}
//-----------------
