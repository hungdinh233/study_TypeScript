import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../util/setting";
import { AppDispatch } from "../configStore";
import { PayloadAction } from "@reduxjs/toolkit";

export interface ProductModel {
  id: number;
  name: string;
  alias: string;
  price: number;
  description: string;
  size: string;
  shortDescription: string;
  quantity: number;
  deleted: boolean;
  categories: string;
  relatedProducts: string;
  feature: boolean;
  image: string;
}
const initialState: any = {
  arrProduct: [],
};

const productReducers = createSlice({
  name: "ProductReducer",
  initialState,
  reducers: {
    getAllProductAction: (state, action: PayloadAction<ProductModel[]>) => {
      state.arrProduct = action.payload;
    },
  },
});

export const { getAllProductAction } = productReducers.actions;

export default productReducers.reducer;

//---action api----

export const getProductApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get("/product");
      //sau khi lấy kết quả đưa lên redux
      let arrProduct: ProductModel[] = result.data.content;
      const action = getAllProductAction(arrProduct);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
