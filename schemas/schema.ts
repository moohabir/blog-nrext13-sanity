import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './blockContent';
import post from './post';
import author from './author';
import about from './about';
import hero from './hero';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, about, hero, blockContent],
};
