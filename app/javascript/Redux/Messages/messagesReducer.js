import axios from "axios";

const GET_RANDOM_MESSAGE_SUCCESS = 'GET_RANDOM_MESSAGE_SUCCESS';
const GET_RANDOM_MESSAGE_FAILURE = 'GET_RANDOM_MESSAGE_FAILURE';

function getRandomMessageSuccess(message) {
  return {
    type: GET_RANDOM_MESSAGE_SUCCESS,
    message
  };
}

function getRandomMessageFailure(error) {
  return {
    type: GET_RANDOM_MESSAGE_FAILURE,
    error
  };
}

const initialState = {
  message: '',
  error: null
};

export function getRandomMessage() {
  return async function(dispatch) {
    try {
      const response = await axios.get('/api');
      dispatch(getRandomMessageSuccess(response.data.message));
    } catch (error) {
      dispatch(getRandomMessageFailure(error));
    }
  };
}

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RANDOM_MESSAGE_SUCCESS:
      return {
        ...state,
        message: action.message,
        error: null
      };
    case GET_RANDOM_MESSAGE_FAILURE:
      return {
        ...state,
        message: '',
        error: action.error
      };
    default:
      return state;
  }
}