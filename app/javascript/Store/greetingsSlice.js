import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';

export const fetchGreetings = createAsyncThunk('greetings/fetchGreetings', async () => {
  const response = await fetch('/api/v1/messages');
  const   { greetings }  = await response.json();
  console.log(greetings);
  return greetings;
});

 export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: {
    greetings: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchGreetings.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchGreetings.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.greetings[0] = action.payload;
    },
 
    [fetchGreetings.rejected]: (state,action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
  });

  export default greetingsSlice.reducer;