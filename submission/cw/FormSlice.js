// src/formSlice.js
import { createSlice } from '@reduxjs/toolkit';
const initialState={
    data:{},
    submitted:false,
    token:{},
    isLoggedIn: false
}
const FormSlice = createSlice({
  name: 'loginForm',
  initialState,reducers: {
    fetchdata:(state)=>{
        state.token={};
    },
    updateField:(state,action)=>{
        const { field, value } = action.payload;
        state.data[field]=value;
    },

    submitForm: (state) => {
      state.submitted=true;
    },
    resetForm: (state) => {
      state.data ={};
      state.submitted = false;
      state.token={};
    },
},
});

export const { updateField, submitForm, resetForm } = FormSlice.actions;
export default FormSlice.reducer;

