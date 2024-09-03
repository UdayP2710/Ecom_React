import "./App.css";
import { Navbar } from "./components/Navbar/nav";
import { Home } from "./components/home/productcard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import { Product } from "./components/product/product";
import { Form } from "./components/AddForm/addproductform";
import { ToastContainer } from "react-toastify";
import { EditForm } from "./components/EditProductForm/editform";
import { Cart } from "./components/Cart/cart";
import { useState } from "react";

function App() {
  const [item, setItem] = useState({});
  const router = createBrowserRouter([
    {
      path: "",
      element: <Navbar />,
      children: [
        { index: true, element: <Home setItem={setItem} /> },
        { path: "product", element: <Product /> },
        { path: "form", element: <Form /> },
        { path: "edit", element: <EditForm item={item} /> },
        { path: "cart", element: <Cart /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <Provider store={store}>
        <ToastContainer />
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
