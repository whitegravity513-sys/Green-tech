import { categories } from "../data/categories";

const filters = [
  { id: "all", name: "All Products" },
  ...categories.map((c) => ({ id: c.id, name: c.name })),
];

export default function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onCategoryChange(filter.id)}
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border-2 ${
            activeCategory === filter.id
              ? "bg-primary text-white border-primary shadow-green"
              : "bg-white text-navy border-gray-200 hover:border-primary hover:text-primary"
          }`}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
}
