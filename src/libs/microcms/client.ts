import { createClient } from 'microcms-js-sdk';

export const readClient = createClient({
  serviceDomain: process.env.MICRO_CMS_SERVICE_DOMAIN,
  apiKey: process.env.MICRO_CMS_READ_API_KEY,
});
