import { ADD_TEMPLATES } from './TemplateActions';

// Initial State
const initialState = { data: [] };

const TemplateReducer = (state = initialState, action) => {
  switch (action.type) {
      
    case ADD_TEMPLATES :
      return {
        data: action.templates,
      };

    default:
      return state;
  }
};

/* Selectors */

// get all templates
export const getTemplates = state => state.templates.data;

// Export Reducer
export default TemplateReducer;
