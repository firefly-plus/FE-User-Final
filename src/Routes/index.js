import { HeaderOnly } from "~/components/Layout";
import BraceletPage from "~/pages/braceletPage";
import Cart from "~/pages/Cart";
import EarringPage from "~/pages/EarringsPage";
import Footer_V1 from "~/pages/Footer_V1";
import Footer_V2 from "~/pages/Footer_V2";
import Footer_V3 from "~/pages/Footer_V3";
import Footer_V4 from "~/pages/Footer_V4";
import Footer_V5 from "~/pages/Footer_V5";
import Home from "~/pages/Home";
import LoveBraceletPage from "~/pages/LoveBraceletPage";
import LoveNecklacePage from "~/pages/LoveNecklacePage";
import LoveRingPage from "~/pages/LoveRingPage";
import NecklacePage from "~/pages/necklacePage";
import News from "~/pages/News";
import ProductAll from "~/pages/ProductAll";
import ProductBySupCategory from "~/pages/ProductBySupCategory";
import ProductDetails from "~/pages/ProductDetails";
import Products from "~/pages/Products";
import Profile from "~/pages/Profile";
import RingPage from "~/pages/RingPage";
import SearchPage from "~/pages/SearchPage";
import ShowAllProductSale from "~/pages/ShowAllProductSale";

//Public Routes
const publicRoutes = [
  { path: "/", component: Home, layout: HeaderOnly },
  { path: "/product", component: Products, layout: HeaderOnly },
  { path: "/productall", component: ProductAll, layout: HeaderOnly },
  { path: "/cart", component: Cart, layout: HeaderOnly },
  { path: "/profile", component: Profile, layout: HeaderOnly },
  { path: "/news", component: News, layout: HeaderOnly },
  { path: "/five-other", component: Footer_V1, layout: HeaderOnly },
  { path: "/hawee", component: Footer_V2, layout: HeaderOnly },
  { path: "/question", component: Footer_V3, layout: HeaderOnly },
  { path: "/support", component: Footer_V4, layout: HeaderOnly },
  { path: "/delivery", component: Footer_V5, layout: HeaderOnly },
  { path: "/productdetail/:id", component: ProductDetails, layout: HeaderOnly },
  {
    path: "/productBySupCategory/:id",
    component: ProductBySupCategory,
    layout: HeaderOnly,
  },
  { path: "/search", component: SearchPage, layout: HeaderOnly },
  {
    path: "/saleproductall",
    component: ShowAllProductSale,
    layout: HeaderOnly,
  },
  { path: "/newproductall", component: ShowAllProductSale, layout: HeaderOnly },
  { path: "/necklacepage", component: NecklacePage, layout: HeaderOnly },
  { path: "/ringpage", component: RingPage, layout: HeaderOnly },
  { path: "/braceletpage", component: BraceletPage, layout: HeaderOnly },
  { path: "/Earringpage", component: EarringPage, layout: HeaderOnly },
  { path: "/loveringpage", component: LoveRingPage, layout: HeaderOnly },
  {
    path: "/lovenecklacepage",
    component: LoveNecklacePage,
    layout: HeaderOnly,
  },
  { path: "/lovebraceletpage", component: LoveBraceletPage, layout: HeaderOnly },
];

//Private Routers
const privateRoutes = [];

export { publicRoutes, privateRoutes };
