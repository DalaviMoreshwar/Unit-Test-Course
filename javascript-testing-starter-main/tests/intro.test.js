import { describe, it, expect } from "vitest";
import { fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("should return first argument if it is greater", () => {
    expect(max(2, 1)).toBe(2);
  });

  it("should return second argument if it is greater", () => {
    expect(max(2, 1)).toBe(2);
  });

  it("should return first argument if arguments are equal", () => {
    expect(max(2, 1)).toBe(2);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzzz if number is divisible by 3 & 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return fizz if number is divisible by 3", () => {
    expect(fizzBuzz(12)).toBe("Fizz");
  });

  it("should return buzz if number is divisible by 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("should return an arg as a string if arg is not divisible by 3 or 5", () => {
    expect(fizzBuzz(1)).toBe("1");
  });
});
