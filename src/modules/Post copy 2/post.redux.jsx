//----------------------------------------------------------------------
// Type'
//----------------------------------------------------------------------
export const LOAD_ALL_POST_REQUEST = "LOAD_ALL_POST_REQUEST";
export const LOAD_ALL_POST_SUCCESS = "LOAD_ALL_POST_SUCCESS";
export const LOAD_ALL_POST_FAILURE = "LOAD_ALL_POST_FAILURE";

export const LOAD_ONE_POST_REQUEST = "LOAD_ONE_POST_REQUEST";
export const LOAD_ONE_POST_SUCCESS = "LOAD_ONE_POST_SUCCESS";
export const LOAD_ONE_POST_FAILURE = "LOAD_ONE_POST_FAILURE";

export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";

export const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";

export const UPDATE_POST_REQUEST = "UPDATE_POST_REQUEST";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_FAILURE = "UPDATE_POST_FAILURE";

//----------------------------------------------------------------------
// Action's
//----------------------------------------------------------------------
export const loadAllPostRequest = (payload) => ({
  type: LOAD_ALL_POST_REQUEST,
  payload,
});
export const loadAllPostSuccess = (payload) => ({
  type: LOAD_ALL_POST_SUCCESS,
  payload,
});
export const loadAllPostFailure = (error) => ({
  type: LOAD_ALL_POST_FAILURE,
  error,
});
//----------------------------------------------------------------------
export const loadOnePostRequest = (id) => ({
  type: LOAD_ONE_POST_REQUEST,
  id,
});
export const loadOnePostSuccess = (payload) => ({
  type: LOAD_ONE_POST_SUCCESS,
  payload,
});
export const loadOnePostFailure = (error) => ({
  type: LOAD_ONE_POST_FAILURE,
  error,
});
//----------------------------------------------------------------------
export const createPostRequest = (payload) => ({
  type: CREATE_POST_REQUEST,
  payload,
});
export const createPostSuccess = (payload) => ({
  type: CREATE_POST_SUCCESS,
  payload,
});
export const createPostFailure = (error) => ({
  type: CREATE_POST_FAILURE,
  error,
});
//----------------------------------------------------------------------
export const deletePostRequest = (id) => ({
  type: DELETE_POST_REQUEST,
  id,
});
export const deletePostSuccess = (payload) => ({
  type: DELETE_POST_SUCCESS,
  payload,
});
export const deletePostFailure = (error) => ({
  type: DELETE_POST_FAILURE,
  error,
});
//----------------------------------------------------------------------
export const updatePostRequest = (id, payload) => ({
  type: UPDATE_POST_REQUEST,
  id,
  payload,
});
export const updatePostSuccess = (payload) => ({
  type: UPDATE_POST_SUCCESS,
  payload,
});
export const updatePostFailure = (error) => ({
  type: UPDATE_POST_FAILURE,
  error,
});

//----------------------------------------------------------------------
// Reducer
//----------------------------------------------------------------------
const initialState = {
  list: [],
  view: {},
  loading: false,
  error: null,
};

export function post(state = initialState, action) {
  switch (action.type) {
    //----------------------------------------------------------------------
    case LOAD_ALL_POST_SUCCESS:
      return { ...state, list: { ...action.payload } };
    case UPDATE_POST_SUCCESS:
    case LOAD_ONE_POST_SUCCESS:
      return {
        ...state,
        error: null,
        loading: true,
        view: { ...action.payload },
      };
    case CREATE_POST_SUCCESS:
    case DELETE_POST_SUCCESS:
      return { ...state };
    //----------------------------------------------------------------------
    case LOAD_ALL_POST_FAILURE:
    case LOAD_ONE_POST_FAILURE:
    case CREATE_POST_FAILURE:
    case DELETE_POST_FAILURE:
    case UPDATE_POST_FAILURE:
      return { ...state, loading: false, error: action.error };
    //----------------------------------------------------------------------
    case LOAD_ALL_POST_REQUEST:
    case LOAD_ONE_POST_REQUEST:
    case CREATE_POST_REQUEST:
    case DELETE_POST_REQUEST:
    case UPDATE_POST_REQUEST:
      return { ...state, loading: true, error: null };
    default:
      return state;
  }
}
