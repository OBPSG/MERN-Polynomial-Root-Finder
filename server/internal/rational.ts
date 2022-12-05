class rational {
    numerator: number
    denominator: number

    constructor(n: number, d: number){
        this.numerator = Math.round(n);
        this.denominator = Math.round(d);
        this.reduce();
    };

    reduce(): void{
        let _gcf = gcf([this.numerator, this.denominator]);
        if(_gcf > 1) {
            this.numerator /= _gcf;
            this.denominator /= _gcf;
        }
    }
};

// Static helper function that determines the Greatest Common Factor (GCF) of a set of numbers
function gcf(numbers: number[]): number{
    let result = 1;
    for(let i = 1; i < Math.max(...numbers); i++){
        let dividesAll = true;
        numbers.forEach(num => {
            dividesAll = dividesAll && (num % i == 0);
        });
        if(dividesAll) result = i;
    }
    return result;
};

export {rational, gcf};