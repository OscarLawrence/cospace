import { createAvatar as generateAvatar, schema } from '@dicebear/core';
import * as collections from '@dicebear/collection';



export default (collection: string, options: object) => {
  console.log('Generating new avatar', collection, options)
  const avatar = generateAvatar(collections[collection], options)
  return avatar
}
