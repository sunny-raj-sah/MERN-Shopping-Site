import { SearchProvider } from "./SearchContext";
import { ProductProvider } from "./ProductContext";
import { WishlistProvider } from "./WishlistContext";
import { CartProvider } from "./CartContext";
import {AddressProvider} from "./AddressContext";

import { OrderProvider } from "./OrderContext";
import { AuthProvider } from "./AuthContext";
const AppProvider = ({ children }) => {
  return  <AuthProvider>  <SearchProvider>  <ProductProvider>
  <WishlistProvider>

     <CartProvider>
              <AddressProvider>
           <OrderProvider>

                {children}

              </OrderProvider>
               </AddressProvider>
          </CartProvider>
        </WishlistProvider>
      </ProductProvider></SearchProvider></AuthProvider>;
};

export default AppProvider;