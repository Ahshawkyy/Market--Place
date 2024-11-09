import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home/Home";
import Market from "./pages/Market/Market";
import NotFound from "./pages/NotFound";
import Groups from "pages/Groups/Groups";
import Friends from "pages/Friends/Friends";
import Settings from "pages/Settings/Settings";
import Profile from "pages/Profile/Profile";
import Cart from "pages/Cart/Cart";
import ProductDetails from "pages/Product-details/Product-details";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="market" element={<Market />} />
      <Route path="cart" element={<Cart />} />
      <Route path="product-details/:id" element={<ProductDetails/>} />
      <Route path="Groups" element={<Groups />} />
      <Route path="Friends" element={<Friends />} />
      <Route path="Settings" element={<Settings />} />
      <Route path="Profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
