import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCards,
  addCard,
  deleteCard,
  updateCard,
} from "../actions/cardActions";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: JSON.parse(localStorage.getItem("cards")) || [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Fetch cards
    builder.addCase(fetchCards.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.loading = false;
      state.cards = action.payload;
      localStorage.setItem("cards", JSON.stringify(action.payload));
    });
    builder.addCase(fetchCards.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Add card
    builder.addCase(addCard.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addCard.fulfilled, (state, action) => {
      state.loading = false;
      state.cards = action.payload;
      localStorage.setItem("cards", JSON.stringify(action.payload));
    });
    builder.addCase(addCard.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Delete card
    builder.addCase(deleteCard.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteCard.fulfilled, (state, action) => {
      state.loading = false;
      state.cards = state.cards.filter((card) => card.id !== action.payload);
      localStorage.setItem("cards", JSON.stringify(state.cards));
    });
    builder.addCase(deleteCard.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Update card
    builder.addCase(updateCard.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateCard.fulfilled, (state, action) => {
      state.loading = false;
      state.cards = action.payload;
      localStorage.setItem("cards", JSON.stringify(action.payload));
    });
    builder.addCase(updateCard.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default cardSlice.reducer;
