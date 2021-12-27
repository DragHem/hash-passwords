//Animation
const title = document.querySelector("h1");
const text = "Hash your pas******";
let indexText = 0;
const addLetter = () => {
  title.innerHTML += text[indexText];
  indexText++;
  if (indexText === text.length) clearInterval(indexTyping);
};

const indexTyping = setInterval(addLetter, 80);

//Hash
const passwordInput = document.querySelector(".password");
const hashOutput = document.querySelector(".hash");
const hashOption = document.querySelector("select");

hashOption.addEventListener("change", hashes);

let hash = "";

passwordInput.addEventListener("input", hashes);

//Copy Event
const copyCbutotn = document.querySelector("button");
copyCbutotn.addEventListener("click", () => {
  hashOutput.select();
  document.execCommand("copy");
});

//Hash Functions

function hashes() {
  let passwordValue = passwordInput.value;

  if (passwordValue === "") {
    hashOutput.value = "";
    hash = "";
  } else {
    switch (hashOption.value) {
      case "md4":
        hash = window.md4(passwordValue);
        hashOutput.value = hash;
        break;
      case "md5":
        hash = window.md5(passwordValue);
        hashOutput.value = hash;
        break;
      case "sha1":
        hash = window.sha1(passwordValue);
        hashOutput.value = hash;
        break;
      case "sha2":
        hash = window.sha2.SHA224(passwordValue);
        hashOutput.value = hash.toString("hex");
        break;
    }
  }
}
