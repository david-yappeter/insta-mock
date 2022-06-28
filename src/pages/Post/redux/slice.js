import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listLoading: false,
  actionLoading: false,
  paginateLoading: false,
  totalCount: 0,
  entities: null,
  lastError: null,
};

export const callTypes = {
  action: "action",
  list: "list",
  paginate: "paginate",
};

export const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    catchError: (state, action) => {
      state.lastError = action.payload.error;
      if (action.payload.callType === callTypes.action) {
        state.actionLoading = false;
      } else if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.paginateLoading = false;
      }
    },
    startCall: (state, action) => {
      state.lastError = null;
      if (action.payload.callType === callTypes.action) {
        state.actionLoading = true;
      } else if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.paginateLoading = true;
      }
    },
    postsFetched: (state, action) => {
      state.listLoading = false;
      state.lastError = null;
      state.entities = action.payload.entities;
      state.totalCount = action.payload.totalCount;
    },
    postsPaginateAdd: (state, action) => {
      state.paginateLoading = false;
      state.lastError = null;
      state.entities = action.payload.entities.reduce((prev, curr) => {
        prev.push(curr);
      }, state.entities || []);
      state.totalCount += action.payload.totalCount;
    },
  },
});
