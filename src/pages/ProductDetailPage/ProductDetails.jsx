import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../store/Slices/productSlice";
import { Rate } from "antd";

import css from "./ProductDetails.module.css";
import clsx from "clsx";
import container from "../../container.module.css";
import BreadcrumbComp from "../../components/Breadcrumb/BreadcrumbComp";

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

      <div className={clsx(container.container)}>
        <BreadcrumbComp
          className={css.bread}
          category={product.category}
        ></BreadcrumbComp>
        <div className={css.productContainer}>
          <img
            className={css.imgWrapper}
            src={product.image}
            alt={product.title}
          />
          <div className={css.rightPart}>
            <h2 className={css.title}>{product.title}</h2>
            <Rate defaultValue={5} disabled={true} allowHalf={true} />
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
