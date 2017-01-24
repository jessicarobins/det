import wajs from 'wajs';
import * as Q from 'q';
import * as _ from 'lodash';
import secrets from '../../secrets';
export const WA_APP_ID = secrets.wolframAlphaId;

export const waClient = new wajs(WA_APP_ID);

export const QUERY_OPTIONS = {
  format: 'plaintext',
  podState: '100@More',
  ignoreCase: true,
  podTitle: 'Result',
  scanner: ['Data']
};

export const formatQuery = (query) => query //`${query} list`;

export const queryFormats = (query) => {
  return [
    query,
    `list of all ${query}`
  ];
};

export const tryQueries = (action) => {
  const queries = queryFormats(action);
  const queryPromises = _.map(queries, (query) => getItems(query));
  return Q.any(queryPromises);
}

export const getItems = (action) => {
  return waClient.query(action, QUERY_OPTIONS)
    .then( (response) => {
      return formatResponse(response);
    })
    .catch( (err) => {
      console.log('err ', err)
      return Q.reject(err);
    });
};

export const formatResponse = (response) => {
  if (!response.pods()[0]){
    console.log('no pods in response');
    return Q.reject();
  }
  let queryString = response.pods()[0].subpod[0].plaintext[0];
  console.log('querystring', queryString)
  if (queryString === '(data not available)'){
    console.log('data not available');
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
    console.log('response was only 1 item');
    return Q.reject();
  }
  return Q.when(resultArray);
}