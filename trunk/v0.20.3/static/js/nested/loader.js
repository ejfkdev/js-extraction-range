// nested loader chunk: dynamically loads its sibling deep chunk
const CHUNK_TABLE = { deep: 'deep.js' };

export async function loadDeep() {
  return import(new URL(`./${CHUNK_TABLE.deep}`, import.meta.url));
}

loadDeep()
  .then(() => console.log('nested deep loaded'))
  .catch((e) => console.warn('nested deep skip', e && e.message));