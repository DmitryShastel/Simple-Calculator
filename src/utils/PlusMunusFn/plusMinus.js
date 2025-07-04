export default function handlePlusMinus($input, input) {
  if (!input) return { input: "-", shouldUpdate: true };

  const lastChar = input[input.length - 1];
  const operators = ["+", "-", "*", "/"];

  if (operators.includes(lastChar)) {
    return { input: input + "-", shouldUpdate: true };
  }

  if (input.startsWith("-")) {
    return { input: input.slice(1), shouldUpdate: true };
  }

  return { input: `-${input}`, shouldUpdate: true };
}
