import wajs from 'wajs';
import * as Q from 'q';
import secrets from '../../secrets';
export const WA_APP_ID = secrets.wolframAlphaId;

export const waClient = new wajs(WA_APP_ID);

export const QUERY_OPTIONS = {
  format: 'plaintext',
  podState: '100@More',
  ignoreCase: true,
  // includePodId: ['Result']
};

export const formatQuery = (query) => query //`${query} list`;

export const getItems = (action) => {
  return waClient.query(formatQuery(action), QUERY_OPTIONS)
    .then( (response) => {
      return formatResponse(response);
    })
}

export const formatResponse = (response) => {
  if (!response.pods()[1]){
    return Q.reject();
  }
  let queryString = response.pods()[1].subpod[0].plaintext[0];
  console.log('querystring', queryString)
  if (queryString === '(data not available)'){
    return Q.reject();
  }
  const totalIndex = queryString.indexOf('(total:');
  if (totalIndex > -1) {
    queryString = queryString.substring(0, totalIndex);
  }
  queryString = queryString.trim();
  let resultArray = queryString.split('  |  ');
  if (resultArray.length === 1) {
    resultArray = queryString.split('\n');
  }
  //if array still only has one element, 
  // it's probably not a legit query
  if(resultArray.length === 1) {
    return Q.reject();
  }
  return Q.when(resultArray);
}