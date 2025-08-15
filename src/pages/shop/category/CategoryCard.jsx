import styles from "./CategoryCard.module.css";
function CategoryCard({ link, category }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={link} alt="image" />
      <p>{category}</p>
    </div>
  )
}

export default CategoryCard
