import { Outlet } from "react-router-dom";
import Header from "./Header";
import PageTransition from "../common/PageTransition";

const ClientLayout = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
    </>
  );
};

export default ClientLayout;
