 const {createSlice} = require('@reduxjs/toolkit')

const slice = createSlice({
  name: 'login',
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state, action ) {
      state.loading = false,
      state.data = action.payload,
      state.error = null,
    },
    fetchError(state, action) {
      state.loading = false,
      state.data = null,
      state.error = action.payload,
    }
  },
});

const {} = slice.actions

const fetchToken =  (user) => async (dispatch) => {
  try {
    
  } catch (error) {
    
  }
}