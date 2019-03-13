import React from 'react';
import PropTypes from "prop-types";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import '../../styles/Item.css';

const GalleryPage = ({ product }) => {

  const imageArray = [];
  for (var i = 0; i < product.productImage.length; i++) {
    const p = {original: product.productImage[i], thumbnail: product.productThumbnail[i]};
    imageArray.push(p);
  }

  return(
    <div>
      <ImageGallery
        items={imageArray}
        showFullscreenButton={false}
        showPlayButton={false}
        showNav={false}
      />
    </div>
  );
}

GalleryPage.propTypes = {
  product: PropTypes.shape({
    productImage: PropTypes.array.isRequired,
    productThumbnail: PropTypes.array.isRequired
  }).isRequired
};

export default GalleryPage;
