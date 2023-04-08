const textarea = document.querySelector("textarea");
const form = document.querySelector("form");

function injectUI() {
  textarea.addEventListener("keydown", function (event) {
    if (event.key === "/") {
      console.log(event.key); // "/"
      showMenu();
    }
  });
}

function showMenu() {
  console.log("menu shown");
  const dropdownMenu = createElement("div", ["dropdown"], "");
  form.appendChild(dropdownMenu);

  const optionFunctions = {
    Summarize: function () {
      console.log("func sum");
    },
    Explain: function () {
      console.log("func explain");
    },
  };

  const optionNames = Object.keys(optionFunctions);

  optionNames.forEach(function (optionName) {
    const option = createElement("div", ["option"], optionName);

    option.addEventListener("click", function () {
      optionFunctions[optionName]();
      dropdownMenu.remove();
    });

    dropdownMenu.appendChild(option);
  });

  //   const summarizeOption = createElement("div", ["option"], "Summarize");
  //   const explainOption = createElement("div", ["option"], "Explain");

  //   summarizeOption.addEventListener("click", function () {
  //     console.log("func sum");
  //     dropdownMenu.remove();
  //   });

  //   explainOption.addEventListener("click", function () {
  //     console.log("func explain");
  //     dropdownMenu.remove();
  //   });

  //   dropdownMenu.appendChild(summarizeOption);
  //   dropdownMenu.appendChild(explainOption);
}

function summaryForm() {
  console.log("summary form shown");
  // show UI for summary form
  // div form field
  // div wrapper
  // div submit btn

  // on submit click call writeQuery
}

function writeQuery() {
  textarea.value = "lol";
  // take value from summary Form
}

createElement("div");

function createElement(tag, classes = [], innerHTML = "") {
  const element = document.createElement(tag);
  //   for (const [key, value] of Object.entries(attributes)) {
  //     element[key] = value;
  //   }
  for (const classname of classes) {
    element.classList.add(classname);
  }
  if (innerHTML) {
    element.innerHTML = innerHTML;
  }
  return element;
}

injectUI();
