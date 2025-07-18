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
import { addToCart } from "../../store/Slices/cartSlice";
import { toast } from "react-toastify";
import Footer from "../../components/Footer/Footer";
import ProductReviews from "../../components/ProductReviews/ProductReviews.jsx";

const ProductDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.singleProduct);

  const [selectedSize, setSelectedSize] = useState();
  const [selectedColor, setSelectedColor] = useState(null);
  const [colorOptions, setColorOptions] = useState([]);
  const [selectedQuantity, setselectedQuantity] = useState(1);

  const [activeTab, setActiveTab] = useState("details");

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

  function minusQuanity() {
    setselectedQuantity((prev) => Math.max(1, prev - 1));
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
    } else if (!selectedColor) {
      toast.error("Please select a color");
    } else {
      toast.success("Added to cart!");
      console.log({
        quantity: selectedQuantity,
        color: selectedColor,
        size: selectedSize,
      });
      dispatch(
        addToCart({
          price: product.price,
          title: product.title,
          image: product.image,
          quantity: selectedQuantity,
          color: selectedColor,
          size: selectedSize,
        })
      );
    }
  };

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
                    height="16px"
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
                <button className={css.countBtn} onClick={() => minusQuanity()}>
                  <svg width="16px" height="16px">
                    <use href="../../../public/icons/count.svg#icon-minus" />
                  </svg>
                </button>
                <p>{selectedQuantity}</p>
                <button
                  onClick={() => setselectedQuantity(selectedQuantity + 1)}
                  className={css.countBtn}
                >
                  <svg width="16px" height="16px">
                    <use href="../../../public/icons/count.svg#icon-plus" />
                  </svg>
                </button>
              </div>
              <button
                onClick={() => handleAddToCart()}
                className={css.addToCartBtn}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className={css.detailsContainer}>
          <div className={css.tabNav}>
            <button
              onClick={() => {
                setActiveTab("details");
              }}
              className={clsx(
                css.tabBtn,
                activeTab == "details" ? css.active : ""
              )}
            >
              Product Details
            </button>
            <button
              onClick={() => {
                setActiveTab("reviews");
              }}
              className={clsx(
                css.tabBtn,
                activeTab == "reviews" ? css.active : ""
              )}
            >
              Rating & Reviews
            </button>
          </div>
          {activeTab === "reviews" ? (
            <div>
              <ProductReviews />
            </div>
          ) : (
            <div>
              <p className={css.descriptionText}>{product.description}</p>
            </div>
          )}
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default ProductDetails;
