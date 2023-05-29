# Chain calculator

```typescript
function ChainCalculator(given) {
    this.num = given || 0;
    const actions = {
        half: ['this.num = this.num/2; return this;'],
        quarter: ['this.num = this.num/4; return this;'],
        third: ['this.num = this.num/3; return this;'],
        pow: ['given', 'this.num = Math.pow(this.num, given); return this;'],
        sqrt: ['this.num = Math.sqrt(this.num); return this;'],
        log: [`console.log(this.num); return this;`],
        sum: ['given',`this.num += given; return this;`],
        minus: ['given',`this.num -= given; return this;`],
        multiply: ['given',`this.num *= given; return this;`],
        divide: ['given',`this.num /= given; return this;`],
        finish: ['return this.num;']
    }

    for(const key in actions) {
        this[key] = new Function(...actions[key])
    }
}
const calculator = new ChainCalculator();

calculator.log().sum(15).log().sum(10).log().finish().log()
```

