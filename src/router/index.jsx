import { createBrowserRouter } from "react-router-dom";
import { LayoutPublic } from "../layout/LayoutPublic";
import { Index } from "../pages/Index";
import { Login } from "../pages/Login";
import getAllProducts from "../API/loaderProducts";
import { ProductsByCategory } from "../pages/ProductsByCategory";

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
                element: <Login />
            },
            {
                path: '/products/:category',
                element: <ProductsByCategory />
            },
        ]
    }
])