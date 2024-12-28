import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/index.jsx";
import { Provider } from "react-redux";
import { AnimatePresence } from "framer-motion";
import store from "./app/store.js";
import "./config/i18n.js";

const routes = createBrowserRouter(ROUTES);

function App() {
  return (
    <Provider store={store}>
      <AnimatePresence mode="wait">
        <RouterProvider router={routes} location={window.location.pathname} />
      </AnimatePresence>
    </Provider>
  );
}

export default App;
