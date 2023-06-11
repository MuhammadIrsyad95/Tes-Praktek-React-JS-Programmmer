import { createSlice } from "@reduxjs/toolkit";
import CourseCreateModal from "../../../../materi-CRUD/components/courseCreateModal";
import * as productAct from "../action";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    entities: [],
    entity: {
      createdAt: "",
      title: "",
      image: "",
      description: "",
      price: "",
    },
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(productAct.getAll.pending, (state) => {
        state.loading = true;
      })
      .addCase(productAct.getAll.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = false;
      })
      .addCase(productAct.getAll.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })

      .addCase(productAct.getDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(productAct.getDetail.fulfilled, (state, action) => {
        state.entity = action.payload;
        state.loading = false;
      })
      .addCase(productAct.getDetail.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      }),
});
export default productSlice.reducer;
