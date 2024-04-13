// *DOM select
const result = document.querySelector(".res-text");
const copy = document.querySelector(".copy");
const range = document.querySelector("#range");
const rangeRes = document.querySelector(".range-res");
const generate = document.querySelector(".generate");
const numInput = document.querySelector("#number");
const charInput = document.querySelector("#special-char");

const strongest = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()<>?{}[]1234567890`;
const strong = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()<>?{}[]`;
const middle = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890`;
const weak = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM`;

generate.addEventListener('click', generatePw);

function generatePw() {
    let length = range.value;
    let numCheck = numInput.checked;
    let charCheck = charInput.checked;
    let newPw = "";
    if (numCheck && charCheck) {
        for (let i = 0; i < length; i++) {
            newPw += strongest[Math.floor(Math.random() * strongest.length)];

        }
    } else if (numCheck) {
        for (let i = 0; i < length; i++) {
            newPw += middle[Math.floor(Math.random() * middle.length)];
        }
    } else if (charCheck) {
        for (let i = 0; i < length; i++) {
            newPw += strong[Math.floor(Math.random() * strong.length)];
        }
    } else {
        for (let i = 0; i < length; i++) {
            newPw += weak[Math.floor(Math.random() * weak.length)];
        }
    }
    // console.log(newPw);
    result.value = newPw;
}

// *Range
range.addEventListener("change", () => {
    rangeRes.innerHTML = range.value;
})
copy.addEventListener("click", () => {
    result.select();
    result.setSelectionRange(0, 99999);
    // *copy
    navigator.clipboard.writeText(result.value);
    if (result.value) {
        alert("Copy Success");
    }

})