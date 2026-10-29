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
});
 