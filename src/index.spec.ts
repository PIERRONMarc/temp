class Fraction {
  constructor(public numerator: number, public denominator: number) {}

  static add(f1: Fraction, f2: Fraction): Fraction {
    if (f1.denominator !== f2.denominator) {
      // Not implemented yet, but that's not the point here
    }
    const numerator = f1.numerator + f2.numerator
    return new Fraction(numerator, f1.denominator);
  }
}

test("Adding fractions in an OOP paradigm", function () {
  // GIVEN
  const f1 = new Fraction(1, 3);
  const f2 = new Fraction(1, 3);

  // WHEN
  const actual = Fraction.add(f1, f2);

  // THEN
  const expected = new Fraction(2, 3);
  expect(actual).toEqual(expected);
});
