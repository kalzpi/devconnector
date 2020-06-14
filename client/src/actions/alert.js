import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

// Alert를 dispatch하는 function이다.
export const setAlert = (msg, alertType, timeout = 2000) => (dispatch) => {
  // 임의의 id 생성
  const id = uuid.v4();
  // SET_ALERT type으로 msg, alertType, id를 store에 dispatch한다.
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  // Thunk에 의해 가능하게 되는 timeout 함수이다. timeout이 끝나면 REMOVE_ALERT type의 action을 payload.id와 함께 store에 dispatch한다.
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
