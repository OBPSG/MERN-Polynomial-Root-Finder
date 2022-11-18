class rational {
    numerator: number
    denomiator: number

    constructor(n: number, d: number){
        this.numerator = Math.round(n);
        this.denomiator = Math.round(d);
        this.reduce();
    }

    reduce = function(){
        let _gcf = gcf([this.numerator, this.denominator]);
        if(_gcf != 0) {
            this.numerator /= _gcf;
            this.denomiator /= _gcf;
        }
    }
};

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

export default rational;