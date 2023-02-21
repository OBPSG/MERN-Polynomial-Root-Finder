import { findAllPossibleZeroes } from "./rationalZeroFinder";
import { Router }  from "express";
import { Polynomial } from "./polynomial";
//Entry point for the mathematical guts of the API
const calculatorRouter = Router();

calculatorRouter.post('/', (req, res) => {
    //Body should have format similar to the following:
    /*
    {
	"polynomialVariable": "x",
	"polynomialTerms": [{
			"coefficient": 8,
			"exponent": 4
		},
		{
			"coefficient": -5,
			"exponent": 3
		},
		{
			"coefficient": 7,
			"exponent": 2
		},
		{
			"coefficient": -4,
			"exponent": 1
		},
		{
			"coefficient": 36,
			"exponent": 0
		}
	]
    }
    */
    const body = req.body;
	//construct polynomial object from JSON data
	let inputPolynomial = new Polynomial(body.polynomialTerms.map((term: { coefficient: number; }) => term.coefficient), body.polynomialVariable)
    
    //call RZT methods
	let solutionSet = findAllPossibleZeroes(inputPolynomial);

    //Append Solution data to request body and send as response
	let responseBody = req.body;
	responseBody.possibleSolutions = solutionSet;
	console.log(responseBody);
	res.send(JSON.stringify(responseBody));
});

export default calculatorRouter;