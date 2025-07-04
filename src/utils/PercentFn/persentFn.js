export default function handlePercent($input, input) {
  let percentIndex = input.lastIndexOf("-");
  let percentValue = parseFloat(input.substring(0, percentIndex));
  let secondValue = parseFloat(input.substring(percentIndex + 1, input.length));
  let result = percentValue - (percentValue * secondValue) / 100;

  if (isNaN(result)) {
    $input.value = "Ошибка";
    return false;
  }

  input = `${percentValue} - ${secondValue}%`;
  $input.value = result;
  return false;
}
