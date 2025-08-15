import { Link, useNavigate } from "react-router"
import frontRoutes from "../../routes/frontRoutes"
import CategoryCard from "./category/CategoryCard"
import styles from "./Shop.module.css";

function Shop() {
  return (
    <div className={styles.container}>
      <Link to={frontRoutes.navigate.shop.getCategoryProducts("ноутбуки")}>
        <CategoryCard
          link={
            "https://media.cnn.com/api/v1/images/stellar/prod/surface-laptop-16-9.jpg?c=16x9&q=h_720,w_1280,c_fill"
          }
          category={"Ноутбуки"}
        />
      </Link>
      <Link to={frontRoutes.navigate.shop.getCategoryProducts("монітори")}>
        <CategoryCard
          link={
            "https://images.samsung.com/is/image/samsung/p6pim/au/ls24f320gaexxy/gallery/au-essential-s3-s32gf-ls24f320gaexxy-545621320?$684_547_PNG$"
          }
          category={"Монітори"}
        />
      </Link>
      <Link to={frontRoutes.navigate.shop.getCategoryProducts("телефони")}>
        <CategoryCard
          link={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNl_uu-jk9_-X_PR2myQYEVhoWbDwIJslKUQ&s"
          }
          category={"Телефони"}
        />
      </Link>
      <Link to={frontRoutes.navigate.shop.getCategoryProducts("телевізори")}>
        <CategoryCard
          link={
            "https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/b41a7fde-dcc1-11ec-9f1b-2e0c91dc8f24.jpg"
          }
          category={"Телевізори"}
        />
      </Link>
    </div>
  )
}

export default Shop
