import React, { useEffect, useState } from "react";
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

  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState(null);
  const [colorOptions, setColorOptions] = useState([]);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    const generateRandomColor = () =>
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    const colors = Array.from({ length: 3 }, () => generateRandomColor());
    setColorOptions(colors);
  }, []);

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
            <div className={css.list}>
              {colorOptions.map((color, index) => (
                <button
                  key={index}
                  className={clsx(css.colorBtn)}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                >
                  <svg
                    className={selectedColor == color ? "" : css.icon}
                    width="16px"
                    height=""
                  >
                    <use href="../../../public/icons/whiteGalocka.svg#icon" />
                  </svg>
                </button>
              ))}
            </div>
            <p className={css.chooseText}>Choose Size</p>
            <div className={css.list}>
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <button
                  key={size}
                  className={clsx(
                    css.sizeBtn,
                    selectedSize === size ? css.activeSize : ""
                  )}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className={css.cartContainer}>
              <div className={css.countContainer}>
                <button className={css.countBtn}>
                  <svg width="16px" height="16px">
                    <use href="../../../public/icons/count.svg#icon-minus" />
                  </svg>
                </button>
                <p>1</p>
                <button className={css.countBtn}>
                  <svg width="16px" height="16px">
                    <use href="../../../public/icons/count.svg#icon-plus" />
                  </svg>
                </button>
              </div>
              <button className={css.addToCartBtn}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
