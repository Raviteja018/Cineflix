export default function checkValidData(name, email, password, isSignIn) {
    const errors = { name: "", email: "", password: "" };
  
    if (!isSignIn) {
      const specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>?/`~";
      const hasSpecialChar = specialChars.split("").some((char) => name.includes(char));
      const hasNumber = /\d/.test(name);
  
      if (hasSpecialChar || hasNumber || name.length < 4) {
        errors.name = "must be 4+ letters with no nums/symbols.";
      }
    }
    // Email validation
    if (!email.includes("@") || !email.includes(".com")) {
      errors.email = "Email must include @ and end with .com";
    } else {
      const atIndex = email.indexOf("@");
      const dotIndex = email.lastIndexOf(".com");
      if (
        atIndex < 1 ||
        dotIndex < atIndex + 2 ||
        dotIndex + 4 !== email.length
      ) {
        errors.email = "Email structure is invalid, eg: abc@gmail.com";
      }
    }
  
    // Password validation
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    } else {
      let hasUpperCase = false;
      let hasNumber = false;
      let hasSpecialChar = false;
      const specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>?/`~";
  
      for (let char of password) {
        if (!isNaN(char)) hasNumber = true;
        else if (
          char === char.toUpperCase() &&
          char.toLowerCase() !== char.toUpperCase()
        )
          hasUpperCase = true;
        else if (specialChars.includes(char)) hasSpecialChar = true;
      }
  
      if (!hasUpperCase)
        errors.password = "Password must contain at least one uppercase letter";
      if (!hasNumber)
        errors.password = "Password must contain at least one number";
      if (!hasSpecialChar)
        errors.password =
          "Password must contain at least one special character";
    }
  
    // If no errors at all
    if (!errors.email && !errors.password && !errors.name) return null;
  
    return errors;
  }
  



















 // const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]/.test(email);
  // const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  // if(!isEmailValid) return "Email ID is not valid";
  // if(!isPasswordValid) return "password is not valid";