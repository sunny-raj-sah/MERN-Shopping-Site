
import { useEffect } from "react"; 
import { useSearchParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

import { useProducts } from "../../context/ProductContext";
import { useSearch } from "../../context/SearchContext";
import { filterProducts } from "../../utils/filterProducts";
const ProductListing = () => {

    const { state , fetchProducts } = useProducts();
    
const [searchParams] = useSearchParams();
const category = searchParams.get("category");

useEffect(() => { 
  if (category) { 
    fetchProducts(`?category=${category}`); 
  } else { fetchProducts(); 

  // eslint-disable-next-line react-hooks/exhaustive-deps
  } }, [category]);

if (state.loading) {
  return (
    <>
      <Navbar />

      <div className="container py-5 text-center">

        <h3>Loading Products...</h3>

      </div>
    </>
  );
}

if (state.error) {
  return (
    <>
      <Navbar />

      <div className="container py-5 text-center">

        <h3>{state.error}</h3>

      </div>
    </>
  );
}
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { state: searchState } = useSearch();

   const filteredProducts = filterProducts(
  state.products,
  state,
  searchState.search
);

   
  
 
    return (

        <>
                 
            <Navbar />


          

      
            <div className="container-fluid">

                <div className="row">

                    <div className="col-lg-3 px-0">

                        <FilterSidebar />

                    </div>

                    <div className="col-lg-9 bg-light py-4 px-5">

                        <div className="d-flex align-items-center mb-4">

                            <h2 className="fw-bold mb-0">

                                Showing All Products

                            </h2>

                            <span className="ms-3 fs-5 text-secondary">

                                (
                                Showing {filteredProducts.length} products
                                )

                            </span>

                        </div>

                        <ProductGrid
                            products={filteredProducts}
                        />

                    </div>

                </div>

            </div>

        </>

    );
};


 
 
export default ProductListing;