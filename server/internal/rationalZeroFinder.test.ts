import { Polynomial } from "./polynomial";
import {rational} from "./rational";
import {findAllPossibleZeroes, getAllFactors} from "./rationalZeroFinder";

test("Factor list of 12 should include 1, 2, 3, 4, 6, and 12", () => {
    let result = getAllFactors(12)
    expect(result).toEqual([1, 2, 3, 4, 6, 12]);
});

test("Factor list of 30 should include 1, 2, 3, 5, 6, 10, 15, and 30", () => {
    let result = getAllFactors(30)
    expect(result).toEqual([1, 2, 3, 5, 6, 10, 15, 30]);
});

test("Factor list of 125 should include 1, 5, 25, 125 ", () => {
    let result = getAllFactors(125)
    expect(result).toEqual([1, 5, 25, 125]);
});

test("Factor list of 7 (a prime number) should only be 1 and 7", () => {
    let result = getAllFactors(7);
    expect(result).toEqual([1, 7]);
});

test("RZT applied for x^2 + 2x + 3 should be +- 1, 3", () => {
    let result = findAllPossibleZeroes(new Polynomial([1, 2, 3], "x"));
    let expectedResult = [
        {
            numerator: -3,
            denominator: 1
        },
        {
            numerator: -1,
            denominator: 1
        },
        {
            numerator: 1,
            denominator: 1
        },
        {
            numerator: 3,
            denominator: 1
        }
    ]
    expect(result).toMatchObject(expectedResult);
});

// 8x^4 - 5x^3 + 7x^2 - 4x + 36
// Factors of P (36): 1, 2, 3, 4, 6, 9, 12, 18, 36
// Factors of Q (8): 1, 2, 4, 8
// Raw Total Solution Set should include :
//  +-1, 2, 3, 4, 6, 9, 12, 18, 36,
//  +-1/2, 1, 3/2, 2, 3, 9/2, 6, 9, 18,
//  +-1/4, 1/2, 3/4, 1, 3/2, 9/4, 3, 9/2, 9
//  +-1/8, 1/4, 3/8, 1/2, 3/4, 9/8, 3/2, 9/4, 9/2
// After removing duplicates and sorting, the final possible solution set will be: 
// {-36, -18, -12, -9, -6, -9/2, -4, -3, -9/4, -9/8, -2, -3/2, -1, -3/4, -1/2, -3/8, -1/4, -1/8, 1/8, 1/4, 3/8, 1/2, 3/4, 1, 3/2, 2, 9/8, 9/4, 3, 4, 9/2, 6, 9, 12, 18, 36}

test("RZT applied for 8x^4 -5x^3 + 7x^2 - 4x + 36 should be +- {-36, -18, -12, -9, -6, -9/2, -4, -3, -9/4, -9/8, -2, -3/2, -1, -3/4, -1/2, -3/8, -1/4, -1/8, 1/8, 1/4, 3/8, 1/2, 3/4, 1, 3/2, 2, 9/8, 9/4, 3, 4, 9/2, 6, 9, 12, 18, 36}", () => {
    let result = findAllPossibleZeroes(new Polynomial([8, -5, 7, -4, 36], "x"));
    expect(result).toContainEqual({numerator: -36, denominator: 1});
    expect(result).toContainEqual({numerator: -18, denominator: 1});
    expect(result).toContainEqual({numerator: -12, denominator: 1});
    expect(result).toContainEqual({numerator: -9, denominator: 1});
    expect(result).toContainEqual({numerator: -6, denominator: 1});
    expect(result).toContainEqual({numerator: -9, denominator: 2});
    expect(result).toContainEqual({numerator: -4, denominator: 1});
    expect(result).toContainEqual({numerator: -3, denominator: 1});
    expect(result).toContainEqual({numerator: -9, denominator: 4});
    expect(result).toContainEqual({numerator: -9, denominator: 8});
    expect(result).toContainEqual({numerator: -2, denominator: 1});
    expect(result).toContainEqual({numerator: -3, denominator: 2});
    expect(result).toContainEqual({numerator: -1, denominator: 1});
    expect(result).toContainEqual({numerator: -3, denominator: 4});
    expect(result).toContainEqual({numerator: -1, denominator: 2});
    expect(result).toContainEqual({numerator: -3, denominator: 8});
    expect(result).toContainEqual({numerator: -1, denominator: 4});
    expect(result).toContainEqual({numerator: -1, denominator: 8});

    expect(result).toContainEqual({numerator: 1, denominator: 8});
    expect(result).toContainEqual({numerator: 1, denominator: 4});
    expect(result).toContainEqual({numerator: 3, denominator: 8});
    expect(result).toContainEqual({numerator: 1, denominator: 2});
    expect(result).toContainEqual({numerator: 3, denominator: 4});
    expect(result).toContainEqual({numerator: 1, denominator: 1});
    expect(result).toContainEqual({numerator: 3, denominator: 2});
    expect(result).toContainEqual({numerator: 2, denominator: 1});
    expect(result).toContainEqual({numerator: 9, denominator: 4});
    expect(result).toContainEqual({numerator: 9, denominator: 4});
    expect(result).toContainEqual({numerator: 3, denominator: 1});
    expect(result).toContainEqual({numerator: 4, denominator: 1});
    expect(result).toContainEqual({numerator: 9, denominator: 2});
    expect(result).toContainEqual({numerator: 6, denominator: 1});
    expect(result).toContainEqual({numerator: 9, denominator: 1});
    expect(result).toContainEqual({numerator: 12, denominator: 1});
    expect(result).toContainEqual({numerator: 18, denominator: 1});
    expect(result).toContainEqual({numerator: 36, denominator: 1});
});