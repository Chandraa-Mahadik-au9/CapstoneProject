import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";
import { listTrendingProducts } from "../actions/productActions.js";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const trendingProducts = useSelector((state) => state.trendingProducts);
  const { loading, error, products } = trendingProducts;

  useEffect(() => {
      dispatch(listTrendingProducts());
    },
    [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message varient='danger'>{error}</Message>
  ) : (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
  {products.map((product) => {
  return (
    <div key={product._id} className='carousel-item'>
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          className='d-block w-100'
          alt={product.name}
        />
        <div className='carousel-caption d-none d-md-block'>
          <h5>{product.name}</h5>
          <p>&#x20B9; {product.price}</p>
        </div>
      </Link>
    </div>
  );
})}
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
  );
};

export default ProductCarousel;

// {products.map((product) => {
//   return (
//     <div key={product._id} className='carousel-item'>
//       <Link to={`/product/${product._id}`}>
//         <img
//           src={product.image}
//           className='d-block w-100'
//           alt={product.name}
//         />
//         <div className='carousel-caption d-none d-md-block'>
//           <h5>{product.name}</h5>
//           <p>&#x20B9; {product.price}</p>
//         </div>
//       </Link>
//     </div>
//   );
// })}
