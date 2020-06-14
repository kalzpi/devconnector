import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

// 최초의 State는 비어 있다.(Alert이므로)
const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
