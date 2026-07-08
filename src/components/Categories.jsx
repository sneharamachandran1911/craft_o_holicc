import "../css/Categories.css";
import categories from "../data/categories";
import CategoryCard from "./CategoryCard.jsx";

function Categories() {
  return (
    <section className="categories-section">

      <div className="section-title">

        <h2>Shop by Category</h2>

        <p>
          Discover handcrafted creations for every special occasion.
        </p>

      </div>

      <div className="category-grid">

        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
          />
        ))}

      </div>

    </section>
  );
}

export default Categories;