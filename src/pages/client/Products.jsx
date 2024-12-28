import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

// Sample product data
const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$20",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$30",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$40",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product 4",
    price: "$50",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Product 5",
    price: "$60",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Product 6",
    price: "$70",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Product 7",
    price: "$80",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Product 8",
    price: "$90",
    image: "https://via.placeholder.com/150",
  },
];

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const { t } = useTranslation();

  // Filter products based on the search term and selected filter
  const filteredProducts = products.filter((product) => {
    return (
      (product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.price.includes(search)) &&
      (filter === "all" || product.price.includes(filter))
    );
  });

  return (
    <>
      <Helmet>
        <title>{t("Products - E-commerce")}</title>
        <meta
          name="description"
          content={t(
            "Explore a wide range of products and find the best deals tailored to your needs."
          )}
        />
        <meta
          name="keywords"
          content={t("products, e-commerce, shopping, deals, categories")}
        />
        <meta name="author" content="E-commerce Team" />
      </Helmet>
      <div className="py-10 px-4">
        {/* Container with 90% width */}
        <div className="container mx-auto max-w-screen-xl px-4">
          {/* Animated ShopCode Products title */}
          <motion.h1
            className="text-center text-4xl font-bold text-gray-800 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {t("Products")}
          </motion.h1>

          {/* Search Bar */}
          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder={t("Search products...")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-3 w-full md:w-1/2 border rounded-lg"
            />
          </div>

          {/* Filter Dropdown with Framer Motion animation */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-3 w-full md:w-1/3 border rounded-lg"
            >
              <option value="all">{t("All Products")}</option>
              <option value="$20">$20</option>
              <option value="$30">$30</option>
              <option value="$40">$40</option>
              <option value="$50">$50</option>
              <option value="$60">$60</option>
              <option value="$70">$70</option>
            </select>
          </motion.div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-lg text-gray-700 mb-4">{product.price}</p>
                <button className="w-full bg-yellow-500 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300">
                  {t("Add to Cart")}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
