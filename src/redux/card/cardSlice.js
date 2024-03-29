import { createSlice } from '@reduxjs/toolkit';
import {
  getCards,
  postCard,
  deleteCard,
  updateCard,
  updateColumnId,
} from './cardThunk';
import * as HelpersReducer from './helpersCardReducer';

const initialState = {
  cards: [],
  isLoading: false,
  error: null,
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCards.fulfilled, HelpersReducer.handleFulfilledGetCards)
      .addCase(postCard.fulfilled, HelpersReducer.handleFulfilledAddCard)
      .addCase(deleteCard.fulfilled, HelpersReducer.handleFulfilledDeleteCard)
      .addCase(updateCard.fulfilled, HelpersReducer.handleFulfilledUpdateCard)
      .addCase(
        updateColumnId.fulfilled,
        HelpersReducer.handleFulfilledUpdateColumnId
      )
      .addMatcher(
        action => action.type.endsWith('fulfilled'),
        HelpersReducer.handleFulfilled
      )
      .addMatcher(
        action => action.type.endsWith('pending'),
        HelpersReducer.handlePending
      )
      .addMatcher(
        action => action.type.endsWith('rejected'),
        HelpersReducer.handleRejected
      );
  },
});

export const cardReducer = cardSlice.reducer;
