import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

// Fetch saved cards
export const fetchCards = createAsyncThunk(
  "cards/fetchCards",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/user/card");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching cards.");
    }
  }
);

// Add a new card
export const addCard = createAsyncThunk(
  "cards/addCard",
  async (cardData, { rejectWithValue }) => {
    try {
      await api.post("/user/card", cardData);
      const response = await api.get("/user/card"); // Fetch updated card list
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error adding card.");
    }
  }
);

// Delete a card
export const deleteCard = createAsyncThunk(
  "cards/deleteCard",
  async (cardId, { rejectWithValue }) => {
    try {
      await api.delete(`/user/card/${cardId}`);
      return cardId; // Return the deleted card ID
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error deleting card.");
    }
  }
);

// Update a card
export const updateCard = createAsyncThunk(
  "cards/updateCard",
  async (cardData, { rejectWithValue }) => {
    try {
      await api.put("/user/card", cardData);
      const response = await api.get("/user/card"); // Güncel liste
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error updating card.");
    }
  }
);
