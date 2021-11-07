import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/types";

const initialState = {
  message: null,
  message_type: null
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return { message: payload.text, message_type: payload.type };

    case CLEAR_MESSAGE:
      return { message: "", message_type: "" };

    default:
      return state;
  }
}