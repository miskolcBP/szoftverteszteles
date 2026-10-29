function assertInvalid(assert, input) {
  assert.throws(
    () => toRoman(input),
    /1 és 3999 közötti egész szám szükséges/
  );
}

QUnit.module("normál működés", function () {  
  QUnit.test("2 -> II", function (assert) {
    assert.strictEqual(toRoman(1), "I");
  });
  
  QUnit.test("3 -> III", function (assert) {
    assert.strictEqual(toRoman(1), "I");
  });
  
  QUnit.test("5 -> V", function (assert) {
    assert.strictEqual(toRoman(5), "V");
  });

  QUnit.test("6 -> VI", function (assert) {
    assert.strictEqual(toRoman(6), "VI");
  });

  QUnit.test("8 -> VIII", function (assert) {
    assert.strictEqual(toRoman(8), "VIII");
  });
  
  QUnit.test("10 -> X", function (assert) {
    assert.strictEqual(toRoman(10), "X");
  });

  QUnit.test("11 -> XI", function (assert) {
    assert.strictEqual(toRoman(11), "XI");
  });

  QUnit.test("20 -> XX", function (assert) {
    assert.strictEqual(toRoman(20), "XX");
  });
  
  QUnit.test("50 -> L", function (assert) {
    assert.strictEqual(toRoman(50), "L");
  });

  QUnit.test("58 -> LVIII", function (assert) {
    assert.strictEqual(toRoman(58), "LVIII");
  });

  QUnit.test("100 -> C", function (assert) {
    assert.strictEqual(toRoman(100), "C");
  });

  QUnit.test("500 -> D", function (assert) {
    assert.strictEqual(toRoman(500), "D");
  });

  QUnit.test("1000 -> M", function (assert) {
    assert.strictEqual(toRoman(1000), "M");
  });
});
 
QUnit.module("kivonásos alak", function () {
  QUnit.test("4 -> IV", function (assert) {
    assert.strictEqual(toRoman(4), "IV");
  });

  QUnit.test("9 -> IX", function (assert) {
    assert.strictEqual(toRoman(9), "IX");
  });

  QUnit.test("14 -> XIV", function (assert) {
    assert.strictEqual(toRoman(14), "XIV");
  });
  
  QUnit.test("40 -> XL", function (assert) {
    assert.strictEqual(toRoman(40), "XL");
  });

  QUnit.test("90 -> XC", function (assert) {
    assert.strictEqual(toRoman(90), "XC");
  });

  QUnit.test("400 -> CD", function (assert) {
    assert.strictEqual(toRoman(400), "CD");
  });

  QUnit.test("900 -> CM", function (assert) {
    assert.strictEqual(toRoman(900), "CM");
  });

  QUnit.test("1994 -> MCMXCIV", function (assert) {
    assert.strictEqual(toRoman(1994), "MCMXCIV");
  });
});

QUnit.module("határértékek", function () {
  QUnit.test("1 alsó határ -> I", function (assert) {
    assert.strictEqual(toRoman(1), "I");
  });

  QUnit.test("3999 felső határ -> MMMCMXCIX", function (assert) {
    assert.strictEqual(toRoman(3999), "MMMCMXCIX");
  });

  QUnit.test("0 a tartomány alatt", function (assert) {
    assertInvalid(assert, 0);
    assertInvalid(assert, "0");
  });

  QUnit.test("4000 a tartomány felett", function (assert) {
    assertInvalid(assert, 4000);
    assertInvalid(assert, "4000");
  });
});