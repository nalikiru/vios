import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'dtfipewt',
  dataset: 'production',
  apiVersion: '2022-09-10',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});