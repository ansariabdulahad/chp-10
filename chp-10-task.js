let inputCodeEl = document.querySelector('.input-code');
let resultEl = document.querySelector('.result');
let runBtn = document.querySelector('.run-btn');

runBtn.onclick = () => {
    resultEl.innerHTML = inputCodeEl.value;
}