import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as ColumnService from 'services/columnService';

export const getColumns = createAsyncThunk(
  'columns/getColumns',
  async (id, { rejectWithValue }) => {
    try {
      return await ColumnService.fetchGetColumn(id);
    } catch (error) {
      toast.error(
        'Oops! Something went wrong! Please try reloading this page!'
      );
      return rejectWithValue(error);
    }
  }
);

export const postColumn = createAsyncThunk(
  'columns/postColumn',
  async (newColumn, { rejectWithValue }) => {
    try {
      return await ColumnService.fetchAddColumn(newColumn);
    } catch (error) {
      toast.error(
        'Oops! Something went wrong! Please try reloading this page!'
      );
      return rejectWithValue(error);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'columns/deleteColumn',
  async (id, { rejectWithValue }) => {
    try {
      const data = await ColumnService.fetchDeleteColumn(id);
      toast.success(`${data.data.message}`);
      return data;
    } catch (error) {
      toast.error(
        'Oops! Something went wrong! Please try reloading this page!'
      );
      return rejectWithValue(error);
    }
  }
);

export const updateColumn = createAsyncThunk(
  'columns/updateColumn',
  async ({ id, newColumn }, { rejectWithValue }) => {
    try {
      const data = await ColumnService.fetchUpdateColumn(id, newColumn);
      toast.success('Your column was successfully updated');
      return data;
    } catch (error) {
      toast.error(
        'Oops! Something went wrong! Please try reloading this page!'
      );
      return rejectWithValue(error);
    }
  }
);
