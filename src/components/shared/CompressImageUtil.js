/**
 * Converts a URI to a Blob.
 * @param {string} uri - The URI to convert.
 * @returns {Promise<Blob>} - The Blob object.
 */
export const uriToBlob = async (uri) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  return blob;
};
