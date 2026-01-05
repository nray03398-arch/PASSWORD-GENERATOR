function generatePassword() {

  let length = document.getElementById("length").value;

  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let number = "0123456789";
  let symbol = "!@#$%^&*()";

  let allChars = "";

  if (document.getElementById("upper").checked) allChars += upper;
  if (document.getElementById("lower").checked) allChars += lower;
  if (document.getElementById("number").checked) allChars += number;
  if (document.getElementById("symbol").checked) allChars += symbol;

  if (allChars === "") {
    alert("Please select at least one option");
    return;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  document.getElementById("result").value = password;
}
