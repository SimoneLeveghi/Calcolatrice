const calcBtns = document.querySelectorAll(".calc-btn");
const textField = document.querySelector("input");
const equals = document.querySelector("#equals");
const backBtn = document.querySelector("#back");
const ACBtn = document.querySelector("#AC");
let prevBtn = document.createElement("button");

textField.value = "";

for(let btn of calcBtns) {
    btn.addEventListener("click", (e) => {
        if(textField.value === "ERROR") {
            ACBtn.click();
        }
    });

    if(btn.classList.contains("sign-btn")) {
        btn.addEventListener("click", () => {
            if(!prevBtn.classList.contains("sign-btn")) {
                textField.value += btn.innerText;
            }
        });
    }
    else if(btn.classList.contains("func-btn")) {
        btn.addEventListener("click", () => {
            textField.value += btn.innerText.slice(0, btn.innerText.length - 1);
        })
    }
    else if(btn.classList.contains("num-btn")) {
        btn.addEventListener("click", () => {
            textField.value += btn.innerText;
        });
    }

    btn.addEventListener("click", () => {
        prevBtn = btn;
    })
}

equals.addEventListener("click", () => {
    try {
        textField.value = math.evaluate(textField.value);
    }
    catch(e) {
        textField.value = "ERROR";
    }
});

backBtn.addEventListener("click", () => {
    textField.value = textField.value.slice(0, textField.value.length - 1);
});

ACBtn.addEventListener("click", () => {
    textField.value = "";
    prevBtn = document.createElement("button");
});

