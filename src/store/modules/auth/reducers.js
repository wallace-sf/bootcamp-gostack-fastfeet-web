import product from 'immer';

const INITIAL_STATE = {
  signed: false,
  token: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return product(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS':
        draft.signed = true;
        draft.token = action.payload.token;
        break;
      case '@auth/SIGN_OUT':
        draft.token = null;
        draft.signed = false;
        break;
      default:
    }
  });
}
