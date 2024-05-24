import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  text:"",
  stopLoad: false,
  isSelected: null
};

const inputSlice = createSlice({
  name: 'inputText',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = [
        ...state.value,
        ...action.payload
      ];
    },
    setText: (state, action) => {
      state.text = action.payload;
    },
    setStopLoad: (state, action) => {
      state.stopLoad = action.payload;
    },
    updateInputValue : (state, action) => {
      state.value = action.payload;
    },
    setSeleted: (state, action) => {
      state.isSelected = action.payload;
    },
  },
});

export const { setValue, setText, setStopLoad, updateInputValue, setSeleted } = inputSlice.actions;
export default inputSlice.reducer;
