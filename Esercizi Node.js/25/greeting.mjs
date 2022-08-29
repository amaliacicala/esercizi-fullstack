// class Greeting {
// 	constructor() {
// 		this.greeting = '';
// 	}

// 	greet() {
// 		this.greeting = "Hello World! It's " + new Date().toLocaleString();
// 	}
// }

// export const greetingInstance = new Greeting();

// refactored:
export const greetingInstance = {
	count: '',
	greeting: '',
	greet(name) {
		this.greeting =
			'[' +
			this.count++ +
			']' +
			` Hello ${name}! It's ` +
			new Date().toLocaleString();
	},
};
