const calculadora = require("../../models/calculadora");

test("sums two numbers correctly", () => {
  expect(calculadora.sum(2, 3)).toBe(5);
  expect(calculadora.sum(-1, 1)).toBe(0);
  expect(calculadora.sum(0, 0)).toBe(0);
});
