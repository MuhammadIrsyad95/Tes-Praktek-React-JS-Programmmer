import { createAsyncThunk } from "@reduxjs/toolkit";
import httpService from "../../../utils/service";

export const getAll = createAsyncThunk("feat/getAllProduct", async () => {
  try {
    const response = await httpService.get("/product");
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const getDetail = createAsyncThunk(
  "feat/getDetailProduct",
  async (productId) => {
    try {
      const response = await httpService.get(`/product/${productId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
