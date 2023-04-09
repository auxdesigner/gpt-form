const textArea = document.querySelector("textarea");
const baseWrapper = document.querySelector("form");

function addTrigger() {
  textArea.addEventListener("keydown", (event) => {
    if (event.key === "/") {
      addMenu();
    }
  });
}

function addMenu() {
  const dropdownMenu = createElement("div", { className: "dropdown_f4g" }); // f4g = Form4GPT
  baseWrapper.appendChild(dropdownMenu);

  // TODO: explain
  const explainOption = createElement("div", {
    className: "option_f4g",
    textContent: "Explain",
  });
  dropdownMenu.appendChild(explainOption);

  // TODO: recoomend
  const recommendOption = createElement("div", {
    className: "option_f4g",
    textContent: "Recommend",
  });
  dropdownMenu.appendChild(recommendOption);

  // Summarize
  const summarizeOption = createElement("div", {
    className: "option_f4g",
    textContent: "Summarize",
  });
  summarizeOption.addEventListener("click", () => {
    summaryForm();
    dropdownMenu.remove();
  });

  dropdownMenu.appendChild(summarizeOption);
}

function summaryForm() {
  const customForm = createElement("div", { className: "customForm_f4g" });
  baseWrapper.appendChild(customForm);

  const inputs = ["Topic", "Length", "Audience"];
  inputs.forEach((input) => {
    const inputLabelGroup = createElement("div", {
      className: "inputLabelGroup_f4g",
    });
    const label = createElement("label", {
      className: "label_f4g",
      textContent: input,
    });
    const field = createElement("input", {
      className: `${input} input_f4g`,
      //   type: "text",
      //   placeholder: input,
    });
    inputLabelGroup.append(label, field);
    customForm.appendChild(inputLabelGroup);
  });

  const submitBtn = createElement("a", {
    className: "submit_f4g",
    textContent: "Submit",
  });
  submitBtn.addEventListener("click", () => {
    const responses = document.querySelectorAll(".input_f4g");
    textArea.value = `Summarize ${responses[0].value}. Limit the length to ${responses[1].value}. The audience is ${responses[2].value}. `;
    baseWrapper.querySelector("button").click();
    customForm.remove();
  });
  customForm.appendChild(submitBtn);
}

function createElement(tag, attrs = {}, classes = [], content = "") {
  const element = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => {
    element[key] = value;
  });
  element.classList.add(...classes);
  if (content) {
    element.textContent = content;
  }
  return element;
}

addTrigger();
