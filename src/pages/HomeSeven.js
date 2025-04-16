import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import products from "../products.json";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/NavBar";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CatalogPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [basket, setBasket] = useState(() => {
    return JSON.parse(localStorage.getItem("basket")) || [];
  });
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToBasket = (product) => {
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find((item) => item.id === product.id);
      if (existingItem) {
        return prevBasket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevBasket, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromBasket = (productId) => {
    setBasket((prevBasket) =>
      prevBasket
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleFavorites = (product) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.id === product.id)
        ? prevFavorites.filter((fav) => fav.id !== product.id)
        : [...prevFavorites, product]
    );
  };

  const filteredProducts = products
    .filter((product) => {
      return (
        (categoryFilter === "" || product.category === categoryFilter) &&
        (priceFilter === "all" ||
          (priceFilter === "low" ? product.price < 100 : product.price >= 100))
      );
    })
    .sort((a, b) => {
      return sortBy === "newest"
        ? new Date(b.addedDate) - new Date(a.addedDate)
        : new Date(a.addedDate) - new Date(b.addedDate);
    });

  return (
    <>
      <Navbar
        basketCount={basket.reduce((total, item) => total + item.quantity, 0)}
        favoritesCount={favorites.length}
      />

      <div className="container mt-5">
        <h2>Product Catalog</h2>

        {/* Filter Section */}
        <div className="mb-4 d-flex gap-3">
          <select
            className="form-select"
            onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="">All Categories</option>
            <option value="Furniture">Furniture</option>
            <option value="Lighting">Lighting</option>
          </select>

          <select
            className="form-select"
            onChange={(e) => setPriceFilter(e.target.value)}>
            <option value="all">All Prices</option>
            <option value="low">Below $100</option>
            <option value="high">$100 & Above</option>
          </select>

          <select
            className="form-select"
            onChange={(e) => setSortBy(e.target.value)}>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        {/* Product List */}
        <div className="d-flex flex-wrap">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              setSelectedProduct={setSelectedProduct}
              addToBasket={addToBasket}
              removeFromBasket={removeFromBasket}
              toggleFavorites={toggleFavorites}
              isFavorite={favorites.some((fav) => fav.id === product.id)}
              isInBasket={basket.some((item) => item.id === product.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CatalogPage;
