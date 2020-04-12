export function toggleModalSuccess() {
  return {
    type: '@modal/TOGGLE_MODAL_SUCCESS',
  };
}

export function updateModalContentSuccess(content) {
  return {
    type: '@modal/UPDATE_MODAL_CONTENT_SUCCESS',
    payload: {
      content,
    },
  };
}
