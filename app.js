function calculate() {
  resultInput.classList.add("error");
  resultInput.value = "ERROR";
  const res = eval(display.value);
  resultInput.classList.remove("error");
  resultInput.value = res;

  if (resultInput.value === "undefined") {
    resultInput.classList.add("error");
    resultInput.value = "ERROR";
  }
}

const display = document.getElementById("input");
const resultInput = document.getElementById("result");
const main = document.querySelector("main");
const root = document.querySelector(":root");

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

document.getElementById("equal").addEventListener("click", calculate);

document.querySelectorAll(".charKey").forEach((charKeyBtn) => {
  charKeyBtn.addEventListener("click", () => {
    const value = charKeyBtn.dataset.value;
    display.value += value;
  });
});

document.getElementById("clear").addEventListener("click", () => {
  display.value = "";
  display.focus();
  resultInput.value = "";
  resultInput.classList.remove("error");
});

display.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    display.value += ev.key;
    return;
  }

  if (ev.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }

  if (ev.key === "Delete") {
    display.value = display.value.slice(0, -1);
    resultInput.value = "";
    resultInput.classList.remove("error");
  }

  if (ev.key === "Enter") {
    calculate();
  }
});

document.getElementById("copyToClipboard").addEventListener("click", (ev) => {
  const button = ev.currentTarget;
  if (button.innerText === "Copy") {
    button.innerText = "Copied!";
    button.classList.add("success");
    navigator.clipboard.writeText(resultInput.value);
  } else {
    button.innerText = "Copy";
    button.classList.remove("success");
  }
});

document.getElementById("themeSwitcher").addEventListener("click", () => {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#AAA");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#26834a");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark";
  }
});
