import { NavLink } from "react-router"
import frontRoutes from "../routes/frontRoutes"
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <nav className={styles.container}>
      <NavLink
        to={frontRoutes.navigate.home}
        end
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Головна
      </NavLink>
      <NavLink
        to={frontRoutes.navigate.shop.list}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Магазин
      </NavLink>
      <NavLink
        to={frontRoutes.navigate.rules}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Правила оплати
      </NavLink>
      <NavLink
        to={frontRoutes.navigate.contacts}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Контакти
      </NavLink>
    </nav>
  )
}

export default Navbar
