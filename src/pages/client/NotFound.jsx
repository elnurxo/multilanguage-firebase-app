import { Link } from "react-router-dom";
import notFoundImg from "../../assets/images/404 Error Page not Found with people connecting a plug.gif";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("Page Not Found - E-commerce")}</title>
        <meta
          name="description"
          content={t(
            "The page you are looking for does not exist or has been moved."
          )}
        />
        <meta name="keywords" content={t("404, not found, e-commerce")} />
        <meta name="author" content="E-commerce Team" />
      </Helmet>
      <div className="flex items-center justify-center">
        <div className="text-center p-8">
          {/* Add your SVG illustration here */}
          <div className="mb-8">
            {/* Example placeholder for illustration */}
            <img src={notFoundImg} alt="not found" title={t("not found")} />
          </div>
          <div className="flex justify-center space-x-6">
            <Link
              to="/"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              {t("Go to Home")}
            </Link>
            <Link
              to="/products"
              className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300"
            >
              {t("View Products")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
