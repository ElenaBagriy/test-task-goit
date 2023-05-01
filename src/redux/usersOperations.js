import { createAsyncThunk } from '@reduxjs/toolkit';
import { UsersAPI } from 'service/api';

export const fetchUsers = createAsyncThunk(
  'users/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await UsersAPI.getAll();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/update',
  async (data, thunkAPI) => {
    try {
      const response = await UsersAPI.updateUser(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);