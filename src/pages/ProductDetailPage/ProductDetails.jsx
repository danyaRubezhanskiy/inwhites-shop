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
            width="600px"
          />
          <div className={css.rightPart}>
            <h2 className={css.title}>{product.title}</h2>
            {product.rating && (
              <div className={css.rate}>
                <Rate
                  defaultValue={product.rating.rate}
                  disabled={true}
                  allowHalf={true}
                />
                <span className={css.rateText}>
                  {product.rating.rate}
                  <p className={css.rateTextOpacity}>/5</p>
                </span>
              </div>
            )}
            <p className={css.price}>${product.price}</p>
            <p className={css.description}>{product.description}</p>
            <p className={css.chooseText}>Select Colors</p>
            <div className={css.block}>
              <ul className={css.colorList}>
                <li>
                  <button className={css.colorBtn}></button>
                </li>
                <li>
                  <button className={css.colorBtn}></button>
                </li>
                <li>
                  <button className={css.colorBtn}></button>
                </li>
              </ul>
            </div>
            <p className={css.chooseText}>Choose Size</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
