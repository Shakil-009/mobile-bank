document.getElementById('add-money').addEventListener('click', function (event){
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    const number = document.getElementById('number').value;
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
     if(number.length===11) {
        if(convertedPin===1234){
            const sum = convertedMainBalance + convertedAmount;
            console.log(sum)
        }
        else{
            alert('Wrong Pin')
        }
     }
     else {
        alert('Wrong Account Number')
     }
})
