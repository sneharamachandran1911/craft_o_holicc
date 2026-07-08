import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link
      to={`/products?category=${category.id}`}
      className="category-card"
    >
      <img
        src={category.image}
        alt={category.name}
      />

      <div className="category-overlay">
        <h3>{category.name}</h3>
      </div>
    </Link>
  );
}

export default CategoryCard;