import { UPDATE_MODAL } from '../actions/ui_actions';

const uiReducer = (state = {}, action) => {
  const modal = state.modal;
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_MODAL:
      if (!modal) {
        return {modal: action.modalName}
      } else {
        return {modal: false}
      }
    default:
      return state;
  }
}

export default uiReducer;