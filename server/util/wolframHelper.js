import wajs from 'wajs';

export const WA_APP_ID = 'G6UJXE-UG88XXUYPK'//process.env.WA_APP_ID;

export const waClient = new wajs(WA_APP_ID);

export const QUERY_OPTIONS = {
  format: 'plaintext',
  podState: '100@More',
  ignoreCase: true,
  reinterpret: true,
};

export const formatQuery = (query) => `list ${query}`;

export const formatResponse = (response) => {
  if (!response.pods()[1]){
    return false;
  }
  let queryString = response.pods()[1].subpod[0].plaintext[0];
  const totalIndex = queryString.indexOf('(total:');
  if (totalIndex > -1) {
    queryString = queryString.substring(0, totalIndex);
  }
  queryString = queryString.trim();
  const resultArray = queryString.split('  |  ');
  return resultArray;
}