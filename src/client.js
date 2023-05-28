import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

console.log(process.env.NODE_ENV.REACT_APP_PROJECT);

export const client = createClient({
  projectId: 'wo3cn3kh',
  dataset: 'production',
  apiVersion: '2023-05-25',
  useCdn: true,
  token: 'skLVE2ais75cn91q4dtkPAZByLUPr3SmY1rCeE0K51JVCOMoEBisKCmfPvh7hGs6bBBjrITqS7e3P1DlbfjCKFFyhCjzETvXwhuLPA3CthQhSdB2b1euKa3QiVBWzG8VAGg7lWdrtfP2iHoZIRLD63EZpICyaKgwoZKmKvZcqVEqCESZKaVe',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);