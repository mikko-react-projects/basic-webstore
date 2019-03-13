import React from 'react';
import PropTypes from "prop-types";
import { Dropdown } from "semantic-ui-react";
import AddItem from './AddItem';
import '../../styles/Item.css';

class DetailPage extends React.Component {
  state = {
    options: {
      id: this.props.product.options[0].id,
      name: this.props.product.options[0].name,
      price: this.props.product.options[0].price
    }
  }

  handleChange = (e, { value }) => {
    const item = this.props.product.options.find(selected => value === selected.name);
    this.setState({
      ...this.state,
      options: {
        ...this.state.options,
        id: item.id,
        name: item.name,
        price:item.price
      }
    })
  }

  render() {
    const { options } = this.state;
    const { product, onAddClick } = this.props;

    const optionsArray = [];
    for (var i = 0; i < product.options.length; i++) {
      const o = {text: product.options[i].key, value: product.options[i].name};
      optionsArray.push(o);
    }

    return (
      <div>
        <h1 className='item-name'>
          {product.name}
        </h1>
        <h2>{options.price} €</h2>
        <p>{product.description}</p>
        <div className="dropdown-button">
          <Dropdown
            onChange={this.handleChange}
            placeholder={product.variable}
            selection
            options={optionsArray}
            value={options.name}
          />
        </div>
        <div className="additem-selection">
          <AddItem
            id={product.id}
            optionsId={options.id}
            optionsName={options.name}
            optionsPrice={options.price}
            submit={onAddClick}
          />
        </div>
      </div>
    );
  }
}

DetailPage.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    storeImage: PropTypes.array.isRequired,
    productImage: PropTypes.array.isRequired,
    productThumbnail: PropTypes.array.isRequired,
    width: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    variable: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  onAddClick: PropTypes.func.isRequired
};

export default DetailPage;
