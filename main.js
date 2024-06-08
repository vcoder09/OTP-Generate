let value = Math.floor(1000 + Math.random() * 9000)

let enterOtp = document.getElementById("input");

let resendOTP = document.getElementById("ref");

let displayOtp = document.getElementById("otp");

// displayOtp.innerHTML = "Your OTP is: " + value;

function verifyOTP(){
 
  let uservalue = enterOtp.value;

  if(uservalue == ""){
    alert("Please Enter OTP")
  }
  else if (uservalue.length > 4) {
    alert("OTP is 4 digits Only")
  }
  else if(value != uservalue){
    alert("OTP is Incorrect")
  }
  else{
    alert("OTP Verify Successfully")
    location.href = "https://codervv.netlify.app"
  }
}

resendOTP.addEventListener("click",() => {
  alert(`Your OTP is: ${value}`)
});

