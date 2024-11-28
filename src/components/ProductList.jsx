
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setPage } from "../features/productSlice";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductListing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, isLoading, error, currentPage } = useSelector(
    (state) => state.products
  );
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart"); // Redirect to the cart page
  };


  // Fetch products when the page loads or when the page changes
  useEffect(() => {
    dispatch(fetchProducts(currentPage));
  }, [dispatch, currentPage]);
  
  


  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <>
    <div style={styles.container}>
      <h2>Product Listing</h2>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.title} style={styles.image} />
            <h3 style={styles.title}>{product.title}</h3>
            <p style={styles.price}>${product.price}</p>
            <button
              style={styles.button}
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div style={styles.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={() => handlePageChange(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
    
    </>
    
  );
};

const styles = {
  container: { padding: "20px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
  },
  image: { width: "100px", height: "100px", objectFit: "contain" },
  title: { fontSize: "13px", margin: "10px 0",height: "40px" },
  price: { fontWeight: "bold" ,height: "30px"},
  pagination: { marginTop: "20px", display: "flex", gap: "10px", justifyContent: "center" },
};

export default ProductListing;
