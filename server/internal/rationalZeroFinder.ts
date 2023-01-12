import {rational} from "./rational";
import {Polynomial} from "./polynomial";

// Class that uses the Rational Zero Theorem (RZT) to first find all possible rational zeros of a polynomial, then evaluate each one to determine if it is actually a zero

function findAllPossibleZeroes(polynomial: Polynomial) : rational[] {
    let q = polynomial.terms[0].coefficient;
    let p = polynomial.terms[polynomial.degree].coefficient;

    let qFactors = getAllFactors(q);
    let pFactors = getAllFactors(p);
    
    // Rational Zero Theorem: For a polynomial of degree n in the form of ax^n + bx^(n-1) + cx^(n-2) + ... + z = 0, the set of
    // all possible rational solutions includes +-[(all factors of z)/(all factors of a)].
    // Therefore, the size of the total set will be 2*m*n, where m and n are the number of factors in z and a, respectively.
    

    
    return null;
}

function getAllFactors(n: number) : number[]{
    let result: number[]
    for(let i = 1; i < Math.abs(n); i++){
        if (Math.abs(n) % i == 0)
            {
                result.push(i);
            }
    }
    return result;
}