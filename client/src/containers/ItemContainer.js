import { connect } from 'react-redux';
import { addToCart } from '../state/cart/actions';
import Item from '../components/item/Item';


const mapStateToProps = (state, ownProps) => ({
	product: state.products.data.find(p =>
		p.slug === ownProps.match.params.slug),
	message: state.cart.message
});

const mapDispatchToProps = (dispatch) => ({
  onAddClick: (id, optionsId, optionsName, optionsPrice, qty) => {
    dispatch(addToCart(id, optionsId, optionsName, optionsPrice, qty))
  }
});

export const ItemContainer = connect(mapStateToProps, mapDispatchToProps)(Item);
