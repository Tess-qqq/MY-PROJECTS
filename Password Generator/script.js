function generatePassword(){
   const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
   const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numberChars = "0123456789";
   const symbolChars = "!@#$%^&*()_-+={}[]|:;'<>,.?/~`";
   let allowedChars = "";
   let password = "";
   const length = parseInt(document.getElementById("length").value);
   const includeLowercase = document.getElementById("Lowercase").checked;
   const includeUppercase = document.getElementById("Uppercase").checked;
   const includeNumbers = document.getElementById("Numbers").checked;
   const includeSymbols = document.getElementById("Symbols").checked;
   allowedChars += includeLowercase ? lowercaseChars : ""
   allowedChars += includeUppercase ? uppercaseChars : ""
   allowedChars += includeNumbers ? numberChars : ""
   allowedChars += includeSymbols ? symbolChars : ""

   if(length < 8){
      document.getElementById("result_error").textContent = "Length should be at least 8 characters long"
   }
   else{
      document.getElementById("result_error").textContent = ""
   }
   for(let i = 0; i<length; i++){
      const randomIndex = Math.floor(Math.random() * allowedChars.length)
      password += allowedChars[randomIndex]
   }

   document.getElementById("password_result").textContent = password;   
}
