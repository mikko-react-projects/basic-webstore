import React from 'react';
import { Link } from "react-router-dom";
import HoverImage from "react-hover-image";
import PropTypes from "prop-types";
import '../../styles/Shop.css';

const Shop = ({ products }) => (
  <div className="wrapper"
    style={{ display: "flex", flexWrap: "wrap" }}
  >
    {products.map(product => (
      <div
        className="product-wrapper"
        style={{ flexBasis: product.width, margin: "0px 5px 5px 5px" }}
        key={product.id}
      >
        <Link to={'/item/' + product.slug}>
          <div className="product-field">
            <HoverImage className='product-image'
              src={product.storeImage[0]}
              hoverSrc={product.storeImage[1]}
            />
            <div className="top-text">{product.name}</div>
          </div>
        </Link>
      </div>
    ))}
  </div>
);

Shop.propTypes = {
  products: PropTypes.array.isRequired
}


export default Shop;
