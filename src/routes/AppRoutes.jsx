import { Route } from "react-router"
import { Routes } from "react-router"
import Layout from "../components/Layout"
import frontRoutes from "./frontRoutes"
import Home from "../pages/Home"
import Shop from "../pages/shop/Shop"
import Products from "../pages/shop/Products"
import Rules from "../pages/Rules"
import Contacts from "../pages/Contacts"
import Page404 from "../pages/Page404"

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={frontRoutes.pages.home} element={<Home />} />
        <Route path={frontRoutes.pages.shop.index}>
          <Route index element={<Shop />} />
          <Route
            path={frontRoutes.pages.shop.byCategory}
            element={<Products />}
          />
        </Route>
        <Route path={frontRoutes.pages.rules} element={<Rules />} />
        <Route path={frontRoutes.pages.contacts} element={<Contacts />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
