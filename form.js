const textarea = document.querySelector("textarea");
const wrapper = document.querySelector("form");

function addTrigger() {
  textarea.addEventListener("keydown", function (event) {
    if (event.key === "/") {
      showMenu();
    }
  });
}

function showMenu() {
  const dropdownMenu = createElement("div", {}, ["dropdown"], "");
  wrapper.appendChild(dropdownMenu);

  const summarizeOption = createElement("div", {}, ["option"], "Summarize", {
    callback: function () {
      summaryForm();
      dropdownMenu.remove();
    },
  });

  dropdownMenu.appendChild(summarizeOption);
}

function summaryForm() {
  //add form container
  const formUI = createElement("div", {}, ["formUI"]);
  wrapper.appendChild(formUI);
  const response = [];

  // add input fields
  const inputs = ["Topic", "Length"];
  inputs.forEach(function (input) {
    const inputLabelGroup = createElement("div", {}, ["inputLabelGroup"]);

    // add label
    const label = createElement(
      "label",
      { type: "label" },
      ["label"],
      [input] // html
    );
    inputLabelGroup.appendChild(label);

    // add input
    const inputElement = createElement(
      "input",
      { type: "input", placeholder: input },
      [input, "input"] // classes
    );
    inputLabelGroup.appendChild(inputElement);

    formUI.appendChild(inputLabelGroup);
  });

  //add submit button
  const submitBtn = createElement("a", {}, ["submit"], "Submit", {
    callback: function () {
      const responses = document.querySelectorAll(".input");
      responses.forEach(function (response) {
        console.log(response.value);
      });

      textarea.value = "lol " + responses[0].value + " " + responses[1].value;
      wrapper.querySelector("button").click();
    },
  });
  formUI.appendChild(submitBtn);
}

function createElement(
  tag,
  attributes,
  classes = [],
  innerHTML = "",
  listener
) {
  const element = document.createElement(tag);
  for (const [key, value] of Object.entries(attributes)) {
    element[key] = value;
  }
  for (const classname of classes) {
    element.classList.add(classname);
  }
  if (innerHTML) {
    element.innerHTML = innerHTML;
  }
  if (listener) {
    element.addEventListener("click", listener.callback);
  }
  return element;
}

addTrigger();
