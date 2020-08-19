let name = document.querySelector("#name");
let lastName = document.querySelector("#lastname");
let presentClass = document.querySelector("#class");
let year = document.querySelector("#year");
let percentage = document.querySelector("#percentage");
let form = document.querySelector("form");
let submitBtn = document.querySelector("#submit-btn");
let regex = /^[a-zA-Z]+$/;
let regexAlphaNumeric = /^[a-zA-Z0-9]*$/;
let pre = document.querySelectorAll("pre");

let inp = document.querySelectorAll("input");

inp.forEach((x) => {
  x.addEventListener("input", () => {
    pre.forEach((x) => x.classList.remove("active"));
    submitBtn.textContent = "submit";
    submitBtn.disabled = false;
  });
});

function isValid(e) {
    let private;
  if (!regex.test(name.value.trim())) {
    name.nextElementSibling.classList.add("active");
    submitBtn.textContent = "cant validate";
    e.preventDefault();
    private=false;
  }
  if (!regex.test(lastName.value.trim())) {
    lastName.nextElementSibling.classList.add("active");
    submitBtn.textContent = "cant validate";
    e.preventDefault();
    private=false;
  }
  if (Number(year.value) > 2017) {
    year.nextElementSibling.classList.add("active");
    submitBtn.textContent = "cant validate";
    e.preventDefault();
    private=false;
  }
  if (!regexAlphaNumeric.test(presentClass.value.trim())) {
    presentClass.nextElementSibling.classList.add("active");
    submitBtn.textContent = "cant validate";
    e.preventDefault();
    private=false;
  }
  if (Number(percentage.value) > 100) {
    percentage.nextElementSibling.classList.add("active");
    submitBtn.textContent = "cant validate";
    e.preventDefault();
    private=false;
  }

  return private===false?false:true;
}

form.addEventListener("submit", (e) => {
  let res = isValid(e);
  if (res) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});
