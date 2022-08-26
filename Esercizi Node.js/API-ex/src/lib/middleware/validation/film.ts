import { Static, Type } from '@sinclair/typebox';

export const filmSchema = Type.Object(
	{
		filmTitle: Type.String(),
		plot: Type.Optional(Type.String()),
		year: Type.Integer(),
		director: Type.String(),
		genres: Type.String(),
		watched: Type.Boolean(),
	},
	{ additionalProperties: false }
);

export type FilmData = Static<typeof filmSchema>;
