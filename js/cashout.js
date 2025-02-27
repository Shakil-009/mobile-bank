document.getElementById('cash-out').addEventListener('click', function (event){
    event.preventDefault();
    const amount = document.getElementById('amount-out').value;
    const convertedAmount = parseFloat(amount);
    const number = document.getElementById('number-out').value;
    const pin = document.getElementById('pin-out').value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
     if(number.length===11) {
        if(convertedPin===1234){
            const sum = convertedMainBalance - convertedAmount;
            document.getElementById('main-balance').innerText = sum;
        }
        else{
            alert('Wrong Pin')
        }
     }
     else {
        alert('Wrong Account Number')
     }
})
