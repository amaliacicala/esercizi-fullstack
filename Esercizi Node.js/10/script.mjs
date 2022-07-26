import * as fs from 'node:fs';

const data = 'This is the content of file.txt 👽';

fs.writeFile('file.txt', data, 'utf8', (error) => {
	if (error) {
		console.error(error);
		return;
	}

	console.log('The file has been saved. Its content is:\n');
	console.log(data);
});
