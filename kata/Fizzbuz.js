class Fizzbuz {
    #arrayResult = []
    #stringResult = ''
    
    print(){
        this.buildArrayResult();
        this.buildStringResult();
        return this.#stringResult;
    }

    get getArrayResult(){
        return this.#arrayResult
    }

    buildArrayResult(){
        this.#arrayResult = []
        for (let i=0 ; i<=100;i++){
            const multipleOf3 = i%3 === 0;
            const multipleOf5 = i%5 === 0;
            const multipleOf3and5 = multipleOf3 && multipleOf5;
            if (i===0){
                this.#arrayResult.push(0);
            } else if (multipleOf3and5){
                this.#arrayResult.push('FizzBuzz');
            } else if (multipleOf3){
                this.#arrayResult.push('Fizz');
            } else if (multipleOf5){
                this.#arrayResult.push('Buzz');
            } else {   
                this.#arrayResult.push(i);
            }
        }
    }

    buildStringResult(){
        this.#stringResult ='';
        const copyArrayResultShifted = this.shiftArray(this.#arrayResult);
        copyArrayResultShifted.forEach((item)=> {
            this.#stringResult += item;
            this.#stringResult += '\n';
        }) 
        return this.#stringResult;
    }
    shiftArray(array){
        const arrayShifted = [...array];
        arrayShifted.shift()
        return arrayShifted
    }
}
module.exports = Fizzbuz;