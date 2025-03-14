import React, { useState } from "react";
import "../../assets/css/views/wishListDetail/wishListDetail.scss";
import twitter from "../../assets/images/x-twitter.png";
import wtp from "../../assets/images/wtp-icons.png";
import facebbok from "../../assets/images/facebbok.png";
import instgram from "../../assets/images/instgram.png";
import snapchat from "../../assets/images/snapchat.png";
import share from "../../assets/images/share-vector.png";
import user from "../../assets/images/user-01.png";
import { addWishListProductList } from "../../system/constants/GlobalConstants";
import FooterComponent from "../../shared/components/footerComponent/footerComponent";
import AddWishListProductCard from "../../shared/components/addWishListProductCard/addWishListProductCard";
import ContactFormCard from "../../shared/components/contactFormCard/contactFormCard";
import CategoryFilter from "../components/categoryFilter/categoryFilter";

const AddWishList = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? addWishListProductList
      : addWishListProductList.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="main-container d-flex flex-coulmn justify-content-center pt-5">
      <div className="width-90 mt-4">
        <h1 className="heading">Create Your Wishlist</h1>
        <p className="subtitle">
          Customize your list and start turning dreams into reality.
        </p>
        <section
          className="pb-5 pt-5 p-3 rounded-4"
          style={{ backgroundColor: "#F9FAFB" }}
        >
          <div className="d-flex justify-content-between">
            <div>
              <p className="fs-16 fw-semibold">Add to Wishlist</p>
            </div>

            <button
              className="fs-16 align-items-center border-0 btn-style d-flex fw-medium justify-content-center px-3 py-3 rounded-4"
              style={{ height: "40px", backgroundColor: "#8DD4DB" }}
            >
              Add Other Item +{" "}
            </button>
          </div>
          <p className="fs-14">
            Browse items, review details, and start building your perfect
            wishlist.{" "}
          </p>

          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="row product-section mx-auto gx-5">
            {filteredProducts.map((item, index) => (
              <AddWishListProductCard
                key={index}
                img={item.img}
                title={item.title}
                description={item.description}
                currency={item.currency}
                targetAmount={item.targetAmount}
                currentAmount={item.currentAmount}
                commission={item.commission}
                category={item.category}
              />
            ))}
          </div>
        </section>
        <FooterComponent />
      </div>
    </div>
  );
};

export default AddWishList;
