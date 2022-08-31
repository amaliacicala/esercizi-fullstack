// Implement a toString method on the Shout class that decorates the toString method for a Text class instance.

// It should use the toUpperCase() method to convert the Text instance string to uppercase.

class Text {
	constructor(text) {
		this.string = text;
	}

	toString() {
		return this.string;
	}
}

class Shout {
	constructor(text) {
		this.text = text;
	}

	toString() {
		return this.text.toString().toUpperCase();
	}
}

console.log(new Text("Hello, I'm talking").toString());

console.log(new Shout(new Text("Hello, I'm shouting!")).toString());
