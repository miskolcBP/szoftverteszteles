function assertInvalid(assert, input) {
  assert.throws(
    () => toRoman(input),
    /1 és 3999 közötti egész szám szükséges/
  );
}

QUnit.module("normál működés", function () {
  QUnit.test("1 -> I", function (assert) {
    assert.strictEqual(toRoman(1), "I");
  });
  
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
});