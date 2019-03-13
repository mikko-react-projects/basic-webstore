import axios from 'axios';

export default {
  auth: {
    login: credentials =>
      axios.post('http://localhost:8080/api/auth', { credentials }).then(res => res.data.user)
  },
  products: {
    add: product =>
      axios.post('http://localhost:8080/api/products', { product }).then(res => res.data.user)
  }
};
