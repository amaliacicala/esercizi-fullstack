// Complete this code to inject the Wheel instance dependencies into the Bike instance.

class Bike {
	// receive the Wheel instances as parameters and store them into values to be used in the specification method
	constructor(wheel1, wheel2) {
		this.wheel1 = wheel1;
		this.wheel2 = wheel2;
	}

	specification() {
		// if no Wheel instance dependencies have been injected into the Bike instance, throw an error
		if (!this.wheel1 || !this.wheel2) {
			throw new Error('No wheel instance set');
		}

		let message = `${this.wheel1.label} wheel diameter = ${this.wheel1.diameter}`;
		message += `, ${this.wheel2.label} wheel diameter = ${this.wheel2.diameter}`;

		return message;
	}
}

class Wheel {
	constructor(label, diameter) {
		this.label = label;
		this.diameter = diameter;
	}
}

const frontWheel = new Wheel('Front', 126);
const backWheel = new Wheel('Back', 42);

// inject the two Wheel instance dependencies as parameters into the Bike instance
const bike = new Bike(frontWheel, backWheel);

console.log(bike);

console.log('Bike specification:', bike.specification());
