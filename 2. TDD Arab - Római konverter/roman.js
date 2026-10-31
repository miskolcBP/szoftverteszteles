const ROMAN_NUMERALS = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

const INVALID_INPUT_MESSAGE =
  "Érvénytelen bemenet: 1 és 3999 közötti egész szám szükséges.";

function toRoman(input) {
  const number = parseInteger(input);

  if (!Number.isInteger(number) || number < 1 || number > 3999) {
    throw new Error(INVALID_INPUT_MESSAGE);
  }

  let remaining = number;
  let result = "";

  for (const [value, symbol] of ROMAN_NUMERALS) {
    while (remaining >= value) {
      result += symbol;
      remaining -= value;
    }
  }

  return result;
}

function parseInteger(input) {
  if (typeof input === "number") {
    return input;
  }

  if (typeof input === "string" && /^[+-]?\d+$/.test(input.trim())) {
    return Number(input.trim());
  }

  return NaN;
}
