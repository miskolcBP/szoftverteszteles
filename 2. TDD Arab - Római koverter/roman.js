function toRoman(input) {
  const symbols = [
    [1000, "M"],
    [500, "D"],
    [100, "C"],
    [50, "L"],
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