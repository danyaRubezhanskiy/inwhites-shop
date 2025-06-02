import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../store/Slices/productSlice";
import { Rate } from "antd";

import css from "./ProductDetails.module.css";
import clsx from "clsx";
import container from "../../container.module.css";

const ProductDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.singleProduct);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  return (
    <div>
      <Header></Header>
      <div className={clsx(css.productContainer, container.container)}>
        <div>
          <img
            className={css.imgWrapper}
            src={product.image}
            alt={product.title}
          />
        </div>
        <div>
          <h2>{product.title}</h2>
          <Rate defaultValue={5} disabled={true} allowHalf={true} />
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
      <p>{product.title}</p>
      <p>{id}</p>
    </div>
  );
};

export default ProductDetails;
