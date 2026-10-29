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

function toRoman(input) {
  let number = NaN;

  if (typeof input === "number") {
    number = input;
  } else if (typeof input === "string") {
    number = Number(input.trim());
  }

  if (!Number.isInteger(number) || number < 1 || number > 3999) {
    throw new Error("Érvénytelen bemenet: 1 és 3999 közötti egész szám szükséges.");
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