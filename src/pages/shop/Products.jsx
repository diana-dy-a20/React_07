import { useEffect, useMemo, useState } from "react"
import { Link, useLocation, useParams } from "react-router"
import frontRoutes from "../../routes/frontRoutes"
import apiRoutes from "../../api/apiRoutes"
import ProductCard from "./product/ProductCard"
import styles from "./Products.module.css";

function Products() {
  const { category } = useParams()
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const res = await fetch(apiRoutes.productsList)
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])
  const filterProducts = useMemo(() => {
    if (!products) return []
    return products.filter((el) => el.category === category)
  }, [products, category])
  if (isLoading) return <div>Завантаження ... </div>
  if (error) return <div>Помилка завантаження </div>

  return (
    <div>
      <ul className={styles.container}>
        {filterProducts.map((el) => (
          <li className={styles.item} key={el.id}><ProductCard product={el}/></li>
        ))}
      </ul>
      <Link style={{display:"flex", alignItems:'center'}} to={frontRoutes.navigate.shop.list}>
        <img
          style={{ width: "15px" }}
          src="https://cdn1.iconfinder.com/data/icons/arrows-i/24/Material_icons-02-05-512.png"
          alt="icon arrow"
        />
        Повернутись до категорій
      </Link>
    </div>
  )
}

export default Products
