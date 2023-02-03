import { rational } from "./rational"

class PolynomialTerm {
    coefficient: number;
    // For constant terms, the variable and exponent properties can be left undefined
    variable?: string;
    exponent?: number

    constructor(coefficient: number, variable: string, exponent: number) {
        this.coefficient = coefficient;
        if(variable) {
            this.variable = variable;
        }
        if(exponent){
            this.exponent = exponent;
        }
    }
}

class Polynomial {
    degree: number;
    terms: PolynomialTerm[];

    //Standard constructor, assumes a single variable polynomial of the form ax^n + bx^(n-1) + cx^(n-2) + ... + z
    //Degree should be equal to the length of the coefficients list plus one (one for every degree term, plus the constant)
    constructor(coeffecients: number[], variable: string){
        this.degree = coeffecients.length - 1;
        this.terms = [];
        for(let i = 0; i < coeffecients.length; i++)
        {
            if(i < coeffecients.length - 1)
            {
                let t = new PolynomialTerm(coeffecients[i], variable, this.degree - i)
                this.terms.push(t);
            }
            else
            {
                let t = new PolynomialTerm(coeffecients[i], null, null)
                this.terms.push(t);
            }  
        }
    }
}

export {PolynomialTerm, Polynomial}