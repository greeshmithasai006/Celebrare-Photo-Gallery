// State shape: an array of favourited photo ids (strings).

export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';

export function favouritesReducer(state, action) {
  switch (action.type) {
    case TOGGLE_FAVOURITE: {
      const id = action.payload;
      return state.includes(id)
        ? state.filter((favouriteId) => favouriteId !== id) // remove
        : [...state, id]; // add
    }
    default:
      return state;
  }
}
