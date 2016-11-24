import wajs from 'wajs';

export const WA_APP_ID = 'G6UJXE-UG88XXUYPK';

export const waClient = new wajs(WA_APP_ID);

export const QUERY_OPTIONS = {
  format: 'plaintext',
  podState: '100@More',
  ignoreCase: true,
  scanTimeout: 10000,
  podTimeout: 10000,
  parseTimeout: 10000,
  formatTimeout: 10000,
  reinterpret: true,
  includePodId: ['Result']
};

export const formatQuery = (query) => `list ${query}`;

export const formatResponse = (response) => {
  let queryString = response.pods()[0].subpod[0].plaintext[0];
  const totalIndex = queryString.indexOf('(total:');
  if (totalIndex > -1) {
    queryString = queryString.substring(0, totalIndex);
  }
  queryString = queryString.trim();
  const resultArray = queryString.split('  |  ');
  return resultArray;
}