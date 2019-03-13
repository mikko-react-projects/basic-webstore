import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';

class PanelForm extends React.Component {
  state = {
    data: {
      id: 0,
      slug: '',
      storeImage: '',
      productImage: '',
      productThumbnail: '',
      width: '',
      name: '',
      variable: ''
    },
    errors: {}
  };

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data)
     }
  };

  validate = (data) => {
    const errors = {};
    return errors;
  }

  render(){
    const { data, errors } = this.state;
    return(
      <Form onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.id}>
          <label htmlFor="id">Id</label>
          <input
            type="number"
            id="id"
            name="id"
            value={data.id}
            onChange={this.onChange}
          />
          {errors.name && <InlineError text={errors.name} />}
        </Form.Field>

        <Form.Field error={!!errors.slug}>
          <label htmlFor="slug">Slug</label>
          <input
            type="text"
            id="slug"
            name="slug"
            placeholder="slug"
            value={data.slug}
            onChange={this.onChange}
          />
          {errors.slug && <InlineError text={errors.slug} />}
        </Form.Field>

        <Form.Field error={!!errors.storeImage}>
          <label htmlFor="storeImage">Store Image</label>
          <input
            type="text"
            id="storeImage"
            name="storeImage"
            placeholder="url to store image"
            value={data.storeImage}
            onChange={this.onChange}
          />
          {errors.storeImage && <InlineError text={errors.storeImage} />}
        </Form.Field>

        <Form.Field error={!!errors.productImage}>
          <label htmlFor="productImage">Product Image</label>
          <input
            type="text"
            id="productImage"
            name="productImage"
            placeholder="url to product image"
            value={data.productImage}
            onChange={this.onChange}
          />
          {errors.productImage && <InlineError text={errors.productImage} />}
        </Form.Field>

        <Form.Field error={!!errors.productThumbnail}>
          <label htmlFor="productThumbnail">Product Thumbnail</label>
          <input
            type="text"
            id="productThumbnail"
            name="productThumbnail"
            placeholder="url to product thumbnail"
            value={data.productThumbnail}
            onChange={this.onChange}
          />
          {errors.productThumbnail && <InlineError text={errors.productThumbnail} />}
        </Form.Field>

        <Form.Field error={!!errors.width}>
          <label htmlFor="width">Width</label>
          <input
            type="text"
            id="width"
            name="width"
            placeholder="width, 32% or 64%"
            value={data.width}
            onChange={this.onChange}
          />
          {errors.width && <InlineError text={errors.width} />}
        </Form.Field>

        <Form.Field error={!!errors.name}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            value={data.name}
            onChange={this.onChange}
          />
          {errors.name && <InlineError text={errors.name} />}
        </Form.Field>

        <Form.Field error={!!errors.variable}>
          <label htmlFor="variable">Variable</label>
          <input
            type="text"
            id="variable"
            name="variable"
            placeholder="variable"
            value={data.variable}
            onChange={this.onChange}
          />
          {errors.variable && <InlineError text={errors.variable} />}
        </Form.Field>

        <Button primary>Save</Button>
      </Form>
    )
  }
}

PanelForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default connect()(PanelForm);
