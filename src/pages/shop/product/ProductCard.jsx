import styles from "./ProductCard.module.css";
function ProductCard({product}) {
	return (
    <div className={styles.card}>
      <img className={styles.image} src={product.imageUrl} alt="image" />
      <p className={styles.tittle}>{product.name}</p>
      <p>{`${product.price}$`}</p>
    </div>
  )
}

export default ProductCard;