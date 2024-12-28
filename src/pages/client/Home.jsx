import { Link } from "react-router-dom";
import shopGif from "../../assets/images/Ecommerce web page.gif";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* React Helmet for Metadata */}
      <Helmet>
        <title>{t("Home - E-commerce")}</title>
        <meta
          name="description"
          content={t("Discover our wide range of products and shop now!")}
        />
        <meta
          name="keywords"
          content={t("e-commerce, shopping, online store, products")}
        />
        <meta name="author" content="E-commerce Team" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20">
        {/* Centered GIF Section */}
        <div className="flex justify-center items-center">
          <img
            src={shopGif}
            alt="E-commerce Illustration"
            className="w-[24%] h-auto max-h-[60vh] object-cover"
          />
        </div>
        {/* "Shop Now" Button */}
        <Link to="/products">
          <button className="block mx-auto bg-yellow-500 text-gray-800 py-2 px-6 rounded-lg hover:bg-yellow-400 transition-all duration-300">
            {t("Shop Now")}
          </button>
        </Link>
      </section>
    </>
  );
};

export default HomePage;
