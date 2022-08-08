import { generatePosterFilename } from './multer';

describe('generatePhotoFilename', () => {
	test.each([
		['image/png', 'png'],
		['image/jpeg', 'jpeg'],
	])(
		"Generates filename with correct extension when passed mimeType '%s'",
		(mimeType, expectedFileExtension) => {
			const fullFilename = generatePosterFilename(mimeType);
			const [, fileExtension] = fullFilename.split('.');

			expect(fileExtension).toEqual(expectedFileExtension);
		}
	);
});
