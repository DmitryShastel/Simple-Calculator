export default function strToMath(string) {
  string = string
    .replaceAll(" ", "")
    .replaceAll("+", " + ")
    .replaceAll("x", " * ")
    .replaceAll("-", " - ")
    .replaceAll("/", " / ")
    .split(" ");

  for (let i = 0; i < string.length; i++) {
    if (string[i] == "") {
      string.splice(i, 2);
      string[i] = "-" + string[i];
    }
  }

  let calc = document.createElement("calc");
  calc.style["opacity"] = `calc(${string.join(" ")})`;
  let result = parseFloat(
    calc.style["opacity"].replace("calc(", "").replace(")", ""),
  );
  calc.remove();

  return result;
}
