import "./styles/App.css";
import Navbar from "./components/Navigation/Navbar";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { CartProvider } from "./hooks/cart-context/cart-context.js"
import { AuthProvider } from "./hooks/authentication-context/auth-context";
import { CategoryProvider } from "./hooks/category-context/category-context";
import { WishlistProvider } from "./hooks/wishlist-context/wishlist-context";


function App() {
  return (
    <BrowserRouter>
		<AuthProvider>
			<CartProvider>
			<WishlistProvider>
				<Navbar/>
				<CategoryProvider>
					<Router/>
				</CategoryProvider>
			</WishlistProvider>
			</CartProvider>
		</AuthProvider>
    </BrowserRouter>
  );
}

export default App;
