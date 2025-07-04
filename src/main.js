import strToMath from "./utils/MathFn/mathFn";
import handleAC from "./utils/CleaningFn/cleaningFn";
import handleEquals from "./utils/EqualsFn/equelsFn";
import handlePlusMinus from "./utils/PlusMunusFn/plusMinus";
import handlePercent from "./utils/PercentFn/persentFn";
import initThemeToggle from "./utils/ChangeThemeFn/changeTheme";

let sim = ["x", "/", "-", "+", "."];
let input = "";
let story = [];
let longStory = "";
let $input = document.querySelector(".input");
let $story = document.querySelector(".story");

[...document.querySelectorAll("button")].forEach(function (el) {
  el.onclick = action;
});

initThemeToggle();

function action(event) {
  let value =
    typeof event === "string"
      ? event
      : event.currentTarget.getAttribute("inTo");

  if (!value) return false;

  if (value === "AC") {
    const clearedState = handleAC($input, $story, input, longStory);
    input = clearedState.input;
    longStory = clearedState.longStory;
    return false;
  }

  if (value === "=") {
    return handleEquals($input, input, longStory, $story, story, strToMath);
  }

  if (value === "+/-") {
    const result = handlePlusMinus($input, input);
    if (result.shouldUpdate) {
      input = result.input;
      $input.value = input;
    }
    return false;
  }

  if (value === "%") {
    return handlePercent($input, input);
  }

  if ((story.length && value === ".") || (!input && value === ".")) {
    value = "0.";
  }

  if (sim.includes(input[input.length - 1]) && sim.includes(value)) {
    if (value !== "-" && sim.includes(input[input.length - 1])) {
      input = input.slice(0, -1);
    }
    if (
      (value === "-" && input[input.length - 1] === "-") ||
      (value === "-" && input[input.length - 1] === "+")
    ) {
      input = input.slice(0, -1);
    }
    if (value !== "-" && sim.includes(input[input.length - 1])) {
      input = input.slice(0, -1);
    }
  }

  if (input === "" && sim.includes(value) && value !== "-") {
    value = "";
  }

  if (story.length && !sim.includes(value)) {
    input = "";
    longStory = "";
  }

  story = [];
  input += value;
  $input.value = input;
}

strToMath();
