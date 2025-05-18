import { test, describe, expect } from "vitest";
import {
  findMaxValue,
  factorial,
  areArraysEqual,
  toTitleCase,
} from "./script.js";

describe("Find Max Value", () => {
  test("Find highest value in an array and the expected result is 8", () => {
    expect(findMaxValue([1, 3, 6, 4, 8])).toBe(8);
  });
  test("Empty array expected result is null, ", () => {
    expect(findMaxValue([])).toBe(null);
  });
  test("Find highest value expected result is -1, ", () => {
    expect(findMaxValue([-10, -5, -1])).toBe(-1);
  });
  test("Data type is not array expected result is null, ", () => {
    expect(findMaxValue("not an array")).toBe(null);
  });
});

describe("Factorial", () => {
  test("Factorial of 5, expected result is 120", () => {
    expect(factorial(5)).toBe(120);
  });
  test("Factorial of 0, expected result is 1", () => {
    expect(factorial(0)).toBe(1);
  });
  test("Factorial of -3, expected result is null", () => {
    expect(factorial(-3)).toBe(null);
  });
  test("Factorial of `5`, expected result is null", () => {
    expect(factorial("5")).toBe(null);
  });
});

describe("areArraysEqual", () => {
  test("Both arrays equal, expected result is true", () => {
    expect(areArraysEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });
  test("Both arrays equal, expected result is false", () => {
    expect(areArraysEqual([1, 2, 3], [3, 2, 1])).toBe(false);
  });
  test("Both arrays equal, expected result is true", () => {
    expect(areArraysEqual([], [])).toBe(true);
  });
  test("Both arrays equal, expected result is false", () => {
    expect(areArraysEqual([1, 2], [1, 2, 3])).toBe(false);
  });
});

describe("toTitleCase", () => {
  test("Capitalise first letter of each word, expected result is Hello World", () => {
    expect(toTitleCase("hello world")).toBe("Hello World");
  });
  test("Capitalise first letter of each word, expected result is Javascript Is Fun", () => {
    expect(toTitleCase("JAVASCRIPT IS FUN")).toBe("Javascript Is Fun");
  });
  test("Capitalise first letter of each word, expected result is `123 Testing Titles`", () => {
    expect(toTitleCase("123 testing titles")).toBe("123 Testing Titles");
  });
  test("Capitalise first letter of each word, expected result is empty string", () => {
    expect(toTitleCase(12345)).toBe("");
  });
});
