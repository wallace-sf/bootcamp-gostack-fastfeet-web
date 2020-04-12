import product from 'immer';

const INITIAL_STATE = {
  open: false,
  content: '',
};

export default function modal(state = INITIAL_STATE, action) {
  return product(state, draft => {
    switch (action.type) {
      case '@modal/TOGGLE_MODAL_SUCCESS':
        draft.open = !state.open;
        break;
      case '@modal/UPDATE_MODAL_CONTENT_SUCCESS':
        draft.content = action.payload.content;
        break;
      default:
    }
  });
}
