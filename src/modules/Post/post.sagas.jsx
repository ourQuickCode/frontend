import axios from "axios";
import { all, takeLatest, call, put } from "redux-saga/effects";
import {
  LOAD_COUNTERS_CARD_REQUEST,
  LOAD_ALL_DONATION_CARD_PAGINATION_REQUEST,
  LOAD_ONE_DONATION_CARD_REQUEST,
  loadCountersCardSuccess,
  loadCountersCardFailure,
  loadAllPaginationCardSuccess,
  loadAllPaginationCardFailure,
  donationCardGetOneSuccess,
  donationCardGetOneFailure,
} from "./post.redux";

/**
 * Show donation information, all and how many
 */
export function* cardCounters() {
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  try {
    const url = "http://localhost:5000/api/post/";
    const { data } = yield call(axios.get, url);

    yield put(loadCountersCardSuccess(data));
  } catch (error) {
    yield put(loadCountersCardFailure(error));
  }
}

/**
 * Help function to filter data
 * @param   {object}   data returns page number for pagination
 */
function encodeFiltersData(data) {
  return Object.keys(data)
    .filter((f) => data[f] !== "" && data[f] !== null)
    .map((f) => encodeURIComponent(f) + "=" + encodeURIComponent(data[f]))
    .join("&");
}

/**
 * Show paged Card donations
 * @returns {iterator}
 */
export function* cardDonationPagination({ filters }) {
  try {
    const filterString = encodeFiltersData(filters);
    const url = `/api/donations/conekta/card?${filterString}`;
    const { data } = yield call(axios.get, url);

    yield put(loadAllPaginationCardSuccess(data));
  } catch (error) {
    yield put(loadAllPaginationCardFailure(error.message));
  }
}

/**
 * Display a single donation record
 * @param   {object}   action.payload Data to take the id of the requested institution
 * @returns {iterator}
 */
export function* cardDonationOne({ id } = {}) {
  try {
    const url = `/api/donations/${id}`;
    const { data } = yield call(axios.get, url);
    yield put(donationCardGetOneSuccess(data));
  } catch (error) {
    yield put(donationCardGetOneFailure(error.message));
  }
}

export function* cardSagas() {
  yield all([
    takeLatest(LOAD_COUNTERS_CARD_REQUEST, cardCounters),
    takeLatest(
      LOAD_ALL_DONATION_CARD_PAGINATION_REQUEST,
      cardDonationPagination
    ),
    takeLatest(LOAD_ONE_DONATION_CARD_REQUEST, cardDonationOne),
  ]);
}
