

import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/api";







export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const { data } = await  api.get('contacts');
    return data; 
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
    await api.delete(`contacts/${contactId}`);
    return contactId;  
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (body, thunkAPI) => {
  try {
    const { data } = await api.post('contacts', body);


    return data; 
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
