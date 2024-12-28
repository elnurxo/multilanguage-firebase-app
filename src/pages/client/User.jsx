import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const User = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("User Dashboard - E-commerce")}</title>
        <meta
          name="description"
          content={t(
            "Manage your account, view order history, and update personal details in your user dashboard."
          )}
        />
        <meta
          name="keywords"
          content={t(
            "user dashboard, e-commerce account, order history, account settings"
          )}
        />
        <meta name="author" content="E-commerce Team" />
      </Helmet>

      <h1>User Page</h1>
    </>
  );
};

export default User;
