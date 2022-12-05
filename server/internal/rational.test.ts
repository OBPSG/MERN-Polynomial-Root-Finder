import {rational, gcf} from "./rational";

test("GCF of 25 and 10 should be 5", () => {
    let result = gcf([25, 10]);
    expect(result).toBe(5);
});

test("GCF of 10 and 25 should be 5", () => {
    let result = gcf([10, 25]);
    expect(result).toBe(5);
});

test("GCF of 13 and 5 should be 1", () => {
    let result = gcf([13, 5]);
    expect(result).toBe(1);
});

test("GCF of 5 and 13 should be 1", () => {
    let result = gcf([5, 13]);
    expect(result).toBe(1);
});

test("5/20 should reduce to 1/4 when used to instantiate a rational",
() => {
    let r1 = new rational(5, 20);
    expect(r1).toEqual({
        numerator: 1,
        denominator: 4
    });
});

test("15/25 should reduce to 3/5 when used to instantiate a rational",
() => {
    let r1 = new rational(3, 5);
    expect(r1).toEqual({
        numerator: 3,
        denominator: 5
    });
});