import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_TEMPLATES = 'ADD_TEMPLATES';
export const ADD_SELECTED = 'ADD_SELECTED';
export const REMOVE_SELECTED = 'REMOVE_SELECTED';

// Export Actions

export function removeSelected() {
  return {
    type: REMOVE_SELECTED
  };
}

export function addSelected(template) {
  return {
    type: ADD_SELECTED,
    template,
  };
}

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
