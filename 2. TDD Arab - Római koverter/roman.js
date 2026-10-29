function toRoman(input) {
  const symbols = [
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

  let remaining = input;
  let result = "";

  for (const [value, symbol] of symbols) {
    while (remaining >= value) {
      result += symbol;
      remaining -= value;
    }
  }

  return result;
}
