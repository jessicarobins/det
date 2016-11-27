import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_TEMPLATES = 'ADD_TEMPLATES';

// Export Actions

export function addTemplates(templates) {
  return {
    type: ADD_TEMPLATES,
    templates,
  };
}

export function fetchTemplates() {
  return (dispatch) => {
    return callApi('templates').then(res => {
      dispatch(addTemplates(res.templates));
    });
  };
}
