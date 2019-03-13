import React from 'react';
import PropTypes from "prop-types";
import { Message } from 'semantic-ui-react';
import GalleryPage from './GalleryPage';
import DetailPage from './DetailPage';
import '../../styles/Item.css';

class Item extends React.Component {
  state= {
    message: null
  }

  componentWillReceiveProps(props) {
    this.setState({ message: props.message });
  }

  render() {

    const { message } = this.state;
    const { product, onAddClick } = this.props;

    return(
      <div className={'item item-' + product.id}>
        {message && <Message attached positive>{message} added to Cart!</Message>}
        <div className="item-image">
          <GalleryPage product={product} />
        </div>

        <div className='item-details'>
          <DetailPage product={product} onAddClick={onAddClick}/>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired,
  onAddClick: PropTypes.func.isRequired
};

export default Item;
