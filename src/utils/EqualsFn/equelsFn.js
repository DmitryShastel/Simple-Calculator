export default function handleEquals(
  $input,
  input,
  longStory,
  $story,
  story,
  strToMath,
) {
  if (input !== $input.value) input = $input.value;

  let string = longStory
    ? `(${longStory.split("=")[0]})${input.replace(longStory.split("=")[1], "")}`
    : input;
  let result = strToMath(string);

  if (isNaN(result)) {
    $input.value = "Ошибка";
    return false;
  }

  longStory = `${string}=${result}`;
  story.push(`${input}=${result}`);
  $story.innerHTML += `<i>${story[story.length - 1]}</i>`;
  input = $input.value = result;

  return false;
}
