import Cart from "./pages/Cart/cart";
import EmptyCart from "./pages/Cart/emptyCart";
import Contact from "./pages/Contact/contact";
import Home from "./pages/Home";
import NotFoundPages from "./pages/notFoundPages/notFoundPages";
import ProductDetail from "./pages/Products/productDetail";
import ProductList from "./pages/Products/productList";
import Login from "./pages/User/login";
import Profile from "./pages/User/profile";
import Rigister from "./pages/User/register";


const routesClient =[
    {
        path: "/",
        exact: true,
        component:Home,
        title: "Home",
    },
    {
        path: "/login",
        exact: true,
        component:Login,
        title: "Login"

    },
    {
        path: "/rigister",
        exact: true,
        component:Rigister,
        title: "Rigister"

    },
    {
        path: "/profile",
        exact: true,
        component: Profile,
        title: "Profile"

    },
    {
        path: "/contact",
        exact: true,
        component:Contact,
        title: "Contact"

    },
    {
        path: "/cart",
        exact: true,
        component:Cart,
        title: "Cart"
    },
    {
        path: "/empty-cart",
        exact: true,
        component:EmptyCart,
        title: "EmptyCart"
    },
    {
        path: "/product",
        exact: true,
        component:ProductList,
        title: "Product"
    },
    {
        path: "/product/:id",
        exact: true,
        component:ProductDetail,
        title: "Product-detail"
    },
    {
        path: "/*",
        exact: true,
        component:NotFoundPages,
        title: "404"
    },

];

export{routesClient};