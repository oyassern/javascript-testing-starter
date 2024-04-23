import { describe, test, it, expect } from "vitest";
import { fizzBuzz, max } from "../intro";

describe('FizzBuzz', () => {
  it('should return FizzBuzz if %3 && %5 = 0', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  })
  it('should return Buzz if  %5 = 0', () => {
    expect(fizzBuzz(35)).toBe('Buzz')
  })
  it('should return Fizz if %3 && %5 = 0', () => {
    expect(fizzBuzz(12)).toBe('Fizz')
  })
  it('should return n.tostring if %3 && %5 =/ 0', () => {
    expect(fizzBuzz(8)).toBe('8')
  })


})