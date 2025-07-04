export default function handleAC($input, $story, input, longStory) {
  $input.value = longStory = input = "";
  $story.innerHTML = "";
  return { input: "", longStory: "" };
}
