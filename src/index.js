import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontext";
import { CartProvider } from "./context/cart_context";
import { FilterContextProvider } from "./context/filter_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-pcw756yv0yqmvzxe.us.auth0.com"
    clientId="DI5NHpOpYt7I20vyKlVBYjjeQRqnlyKq"
    redirectUri={window.location.origin}
  >
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>
);
reportWebVitals();
