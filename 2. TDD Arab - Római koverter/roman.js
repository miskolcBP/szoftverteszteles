function toRoman(input) {
  let result = "";
  let remaining = input;

  while (remaining >= 1) {
    result += "I";
    remaining -= 1;
  }

  return result;
}