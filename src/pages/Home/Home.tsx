//tsrfc
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Products from "../../Components/Products/Products";
import { AppDispatch, RootState } from "../../redux/configStore";
import {
  getProductApi,
  ProductModel,
} from "../../redux/reducers/productReducers";
type Props = {
  title?: string;
};

export default function Home({ title }: Props) {
  const { arrProduct } = useSelector(
    (state: RootState) => state.productReducers
  );
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    //call api
    const actionApi = getProductApi();
    dispatch(actionApi);
  },[]);
  const renderProduct = () => {
    return arrProduct.map((prod: ProductModel, index: number) => {
      return (
        <div className="col-4" key={index}>
          <Products product={prod} />
        </div>
      );
    });
  };
  return (
    <div className="container">
      <h3 className="text-center">Shoes Shop</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}
