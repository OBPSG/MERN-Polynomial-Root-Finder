class rational {
    numerator: number
    denominator: number

    constructor(n: number, d: number) {
        this.numerator = Math.floor(n);
        this.denominator = Math.floor(d);
        this.reduce();
    };

    reduce(): void {
        let _gcf = gcf([this.numerator, this.denominator]);
        if (_gcf > 1) {
            this.numerator /= _gcf;
            this.denominator /= _gcf;
        }
    }

    toNumber(): number {
        return this.numerator/this.denominator;
    }

    times(r2: rational) : rational {
        return new rational(this.numerator*r2.numerator, this.denominator*r2.denominator);
    }

    reciprocal(): rational {
        return new rational (this.denominator, this.numerator)
    }

    over(r2: rational): rational {
        return this.times(r2.reciprocal());
    }
};

// Static helper function that determines the Greatest Common Factor (GCF) of a set of numbers
function gcf(numbers: number[]): number {
    let result = 1;
    for (let i = 1; i < Math.max(...numbers); i++) {
        let dividesAll = true;
        numbers.forEach(num => {
            dividesAll = dividesAll && (num % i == 0);
        });
        if (dividesAll) result = i;
    }
    return result;
};

export { rational, gcf };