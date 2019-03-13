import { connect } from 'react-redux';
import Shop from '../components/shop/Shop';

const mapStateToProps = (state) => ({
	products: state.products.data
});

export const ShopContainer = connect(mapStateToProps)(Shop);
