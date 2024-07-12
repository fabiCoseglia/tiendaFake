import { createBrowserRouter } from "react-router-dom";
import { LayoutPublic } from "../layout/LayoutPublic";
import { Index } from "../pages/Index";
import { Login } from "../pages/Login";
import getAllProducts from "../API/loaderProducts";
import { ProductsByCategory } from "../pages/ProductsByCategory";
import getProductsByCategory from "../API/loaderProductsByCategory";
import { DetailProduct } from "../pages/DetailProduct";
import getDetailProduct from "../API/loaderDetailProduct";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        children: [
            {
                path: '/',
                element: <Index />,
                loader: getAllProducts,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/products/:category',
                element: <ProductsByCategory />,
                loader: getProductsByCategory
            },
            {
                path: '/product/:id',
                element: <DetailProduct />,
                loader: getDetailProduct,
            },
        ]
    }
])