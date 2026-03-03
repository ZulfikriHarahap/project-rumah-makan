import RestaurantCard from "./RestaurantCard";

function RestaurantList({ restaurants, onDelete }) {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">
      {restaurants.map((r) => (
        <RestaurantCard
          key={r.id}
          data={r}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default RestaurantList;