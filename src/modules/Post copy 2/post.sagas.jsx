import axios from "axios";
import { all, takeLatest, call, put } from "redux-saga/effects";
import {
  LOAD_ALL_POST_REQUEST,
  LOAD_ONE_POST_REQUEST,
  CREATE_POST_REQUEST,
  DELETE_POST_REQUEST,
  UPDATE_POST_REQUEST,
  updatePostSuccess,
  updatePostFailure,
  deletePostSuccess,
  deletePostFailure,
  loadAllPostSuccess,
  loadAllPostFailure,
  loadOnePostSuccess,
  loadOnePostFailure,
  createPostSuccess,
  createPostFailure,
} from "./post.redux";
import Swal from "sweetalert2";

/**
 * Show paged Card donations
 * @returns {iterator}
 */
export function* loadAllPost() {
  try {
    const url = "http://localhost:5000/api/post";
    const { data } = yield call(axios.get, url);

    yield put(loadAllPostSuccess(data));
  } catch (error) {
    yield put(loadAllPostFailure(error.message));
  }
}

/**
 * Display a single donation record
 * @param   {object}   action.payload Data to take the id of the requested institution
 * @returns {iterator}
 */
export function* loadOnePost({ id }) {
  try {
    const url = `http://localhost:5000/api/post/${id}`;
    const { data } = yield call(axios.get, url);
    yield put(loadOnePostSuccess(data));
  } catch (error) {
    yield put(loadOnePostFailure(error.message));
  }
}

export function* createPost({ payload }) {
  try {
    const url = "http://localhost:5000/api/post";
    const { data } = yield call(axios.post, url, payload);
    yield put(createPostSuccess(data));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Post publicado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    yield put(createPostFailure(error));
    console.log(error);
  }
}

/**
 * Show paged Card donations
 * @returns {iterator}
 */
export function* deletePost({ id }) {
  try {
    const url = `http://localhost:5000/api/post/${id}`;
    const { data } = yield call(axios.delete, url);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Post borrrado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
    yield put(deletePostSuccess(data));
  } catch (error) {
    yield put(deletePostFailure(error.message));
  }
}

/**
 * Show paged Card donations
 * @returns {iterator}
 */
export function* updatePost({ id, payload }) {
  try {
    const url = `http://localhost:5000/api/post/${id}`;
    const { data } = yield call(axios.put, url, payload);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Post actualizado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
    yield put(updatePostSuccess(data));
  } catch (error) {
    yield put(updatePostFailure(error.message));
  }
}

export function* postSagas() {
  yield all([
    takeLatest(LOAD_ALL_POST_REQUEST, loadAllPost),
    takeLatest(LOAD_ONE_POST_REQUEST, loadOnePost),
    takeLatest(CREATE_POST_REQUEST, createPost),
    takeLatest(DELETE_POST_REQUEST, deletePost),
    takeLatest(UPDATE_POST_REQUEST, updatePost),
  ]);
}
