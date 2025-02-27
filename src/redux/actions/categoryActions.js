import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api.js";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await api.get("/categories");
    return response.data;
  }
);
