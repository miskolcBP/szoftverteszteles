function toRoman(input) {
  const symbols = [
    [5, "V"],
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