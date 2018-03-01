class FirstClass {
	// we can define initial values in the constructor
	constructor() {
		this.name = "Joe";
	}

	// and then define any methods/functions outside
	printName() {
		console.log(`Hi, my name is ${this.name}.`);
	}
}

class SecondClass extends FirstClass {
	constructor() {
		// we need to call super() here to run the constructor on the parent/inherited class
		super();

		this.job = "button factory";
	}

	printJob() {
		console.log(`I work in a ${this.job}.`);
	}
}

class ThirdClass extends SecondClass {
	constructor() {
		// we need to call super() here to run the constructor on the parent/inherited class
		super();

		this.pay = 11;
	}

	printPay() {
		console.log(`I make $${this.pay} an hour. I'm a slave.`);
	}
}

let test = new SecondClass();

let test2 = new ThirdClass();
// because SecondClass extended FirstClass, this variable has access to the parent class's methods
test.printName();

test.printJob();
test2.printPay();
