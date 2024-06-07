const passwordElement = document.getElementById("password");
const lengthElement = document.getElementById("length");
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const button = document.getElementById("generate");
const copyButton = document.getElementById("copy");
const copyText = document.getElementById("copy-text");

const characters = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()",
};

const generatePassword = () => {
  let password = "";
  let length = lengthElement.value;
  let selectedChars = "";

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedChars += characters[checkbox.id];
    }
  });

  for (let i = 0; i < length; i++) {
    let rand = Math.floor(Math.random() * selectedChars.length);
    password += selectedChars.substring(rand, rand + 1);
  }

  passwordElement.value = password;
};

const copyPassword = () => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(passwordElement.value);
    copyText.style.display = "block";
    setTimeout(() => {
      copyText.style.display = "none";
    }, 2000);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  button.addEventListener("click", generatePassword);
  copyButton.addEventListener("click", copyPassword);
});
