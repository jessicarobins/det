// Export Constants
export const TOGGLE_ADD_POST = 'TOGGLE_ADD_POST';
export const TOGGLE_ADD_LIST = 'TOGGLE_ADD_LIST';

// Export Actions
export function toggleAddPost() {
  return {
    type: TOGGLE_ADD_POST,
  };
}

export function toggleAddList() {
  return {
    type: TOGGLE_ADD_LIST,
  };
}
