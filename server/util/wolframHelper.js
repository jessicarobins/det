import * as Q from 'q';
import * as _ from 'lodash';
import axios from 'axios';

import secrets from '../../secrets';
export const WA_APP_ID = secrets.wolframAlphaId;

export const uri = (input) => `http://api.wolframalpha.com/v2/query?input=${encodeURIComponent(input)}&format=plaintext&output=json&scanner=Data&podstate=100@More&appid=${WA_APP_ID}`;

export const query = (input) => {
  return axios.get(uri(input))
    .then(response => {
      return response.data.queryresult;
    });
};

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
  return query(action)
    .then( (response) => {
      return formatResponse(response);
    })
    .catch( (err) => {
      console.log('err ', err)
      return Q.reject(err);
    });
};

const getPod = (results) => {
  return _.find(results.pods, {id: 'Result'});
}

export const formatResponse = (response) => {
  const resultPod = getPod(response);
  if (!resultPod){
    console.log('no pods in response');
    return Q.reject('no pods in response');
  }
  let queryString = resultPod.subpods[0].plaintext;
  console.log('querystring', queryString)
  if (queryString === '(data not available)'){
    console.log('data not available');
    return Q.reject('data not available');
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
    return Q.reject('response was only 1 item');
  }
  return Q.when(resultArray);
}
