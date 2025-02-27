document.getElementById('btn-login').addEventListener('click',function(event){
     event.preventDefault();
     const mobileNumber = document.getElementById("mobile-numbr").value;
     const pinNumber = document.getElementById("pin-numbr").value;
     const newPinNumber = parseInt(pinNumber)
     if(mobileNumber.length == 11){
        if(pinNumber == 1234){
          window.location.href="./main.html"

        }
        else{
            alert("Pin Thik Nai.")
        }
     }
     else{
       alert("Need valid account Number")
     }
})