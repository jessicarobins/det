import { combineReducers } from 'redux';
import * as actions from './TemplateActions';

const templates = (
  state = [],
  action
) => {
  switch (action.type) {
    case actions.ADD_TEMPLATES:
      return action.templates;
    default:
      return state;
  }
};

const selected = (
  state = '',
  action
) => {
  switch (action.type) {
    case actions.ADD_SELECTED:
      return action.template;
    case actions.REMOVE_SELECTED:
      return '';
    default:
      return state;
  }
};

const TemplateReducer = combineReducers({
  templates,
  selected
});

/* Selectors */

// get all templates
export const getTemplates = state => state.templates.templates;
export const getSelected = state => state.templates.selected;

// Export Reducer
export default TemplateReducer;
