import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="row g-4">
      {products.map((product) => (
        <div className="col-lg-3 col-md-6" key={product._id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
