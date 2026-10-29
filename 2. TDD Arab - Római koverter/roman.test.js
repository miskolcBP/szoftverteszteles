function assertInvalid(assert, input) {
  assert.throws(
    () => toRoman(input),
    /1 és 3999 közötti egész szám szükséges/
  );
}

QUnit.module("normál működés", function () {
  QUnit.test("2 -> II", function (assert) {
    assert.strictEqual(toRoman(2), "II");
  });
