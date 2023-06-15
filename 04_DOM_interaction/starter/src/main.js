//exo 1//

const btnColor1 = document.querySelectorAll(".btn-1");
const result1 = document.querySelector(".div-to-color-1");

btnColor1[0].addEventListener("click", onClickColor);
btnColor1[1].addEventListener("click", onClickColor);
btnColor1[2].addEventListener("click", onClickColor);

function onClickColor(event) {
  result1.style.backgroundColor = event.target.textContent;
}

//exo 2//

const input3 = document.querySelector(".input-3");
const result3 = document.querySelector(".text-to-display-3");

input3.addEventListener("input", inputText);

function inputText(event) {
  result3.textContent = input3.value;
}

//exo 3//

const input4 = document.querySelectorAll(".input-4");
const result4 = document.querySelector(".text-to-display-4");

input4[0].addEventListener("input", onClickDate);
input4[1].addEventListener("input", onClickDate);

function onClickDate(event) {
  let valueStart = input4[0].value;
  let valueEnd = input4[1].value;

  result4.textContent =
    (Date.parse(valueEnd) - Date.parse(valueStart)) / (1000 * 60 * 60 * 24);
}

//exo 4//

const form2 = document.querySelector(".form-2");
const input2 = document.querySelector(".input-2");
const result2 = document.querySelector(".text-to-display-2");

// form2.addEventListener("change", (e) => {
//   e.preventDefault();
// });
input2.addEventListener("change", onClickText);

function onClickText(event) {
  result2.textContent = input2.value;
}

//event type submit fonctionne aussi //
//le change ne comprend pas le retour au default//

//exo 8//

const btnColor8 = document.querySelectorAll(".btn-8");
const result8 = document.querySelector(".div-to-color-8");

btnColor8[0].addEventListener("click", onClickColor8);
btnColor8[1].addEventListener("click", onClickColor8);
btnColor8[2].addEventListener("click", onClickColor8);

function onClickColor8(event) {
  result8.style.backgroundColor = event.target.getAttribute("data-color");
}

//exo 5//

const input5 = document.querySelector(".input-5");
const result5 = document.querySelector(".text-to-display-5");

result5.textContent = input5.value;
input5.addEventListener("input", function (event) {
  result5.textContent = input5.value;
});

//exo 6//

const select6 = document.querySelector(".select-6");
const result6 = document.querySelector(".text-to-display-6");

select6.addEventListener("input", function (event) {
  result6.textContent = event.target.value;
});

//exo 7//

const input7 = document.querySelector(".input-7");
const result7 = document.querySelector(".div-to-color-7");

// input7.addEventListener("input", (e) => {
//   result7.style.backgroundColor = e.target.value;
// });

// input7.addEventListener("input", changeRgbColor);
// function changeRgbColor(event) {
//   result7.style.backgroundColor = event.target.value;
// }

input7.addEventListener("input", function (event) {
  result7.style.backgroundColor = event.target.value;
});

//exo 9//

const result9 = document.querySelector(".text-to-display-9");
const checkbox = document.querySelectorAll(".checkbox");

checkbox[0].addEventListener("input", checkSquare);
checkbox[1].addEventListener("input", checkSquare);

function checkSquare(event) {
  if (checkbox[0].checked || checkbox[1].checked == true) {
    result9.textContent = event.target.value;
  } else {
    result9.textContent = "";
  }
  if (checkbox[0].checked && checkbox[1].checked) {
    result9.textContent = "coding - music";
  }
}
