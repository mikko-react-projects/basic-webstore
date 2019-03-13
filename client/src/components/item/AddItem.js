import React from 'react';
import PropTypes from "prop-types";
import { Form, Button, Icon, Label } from "semantic-ui-react";

class AddItem extends React.Component {
  state = {
    qty: 1
  }

  onSubmit = e => this.props.submit(
    this.props.id,
    this.props.optionsId,
    this.props.optionsName,
    this.props.optionsPrice,
    this.state.qty
  );

  onPlusClick = () => this.setState({qty: this.state.qty + 1 });

  onMinusClick = () => {
    if(this.state.qty > 1) {
      this.setState({qty: this.state.qty - 1 })
    }
  }

  render() {
    const { qty } = this.state;

    return(
      <Form onSubmit={this.onSubmit}>
        <Form.Group inline>
          <Form.Field>
            <div>
              <Icon name="plus" size="small" color="grey" onClick={this.onPlusClick} />
              <Label>{qty}</Label>
              <Icon name="minus" size="small" color="grey" onClick={this.onMinusClick}/>
            </div>
          </Form.Field>
          <Form.Field>
            <Button primary>Add to cart</Button>
          </Form.Field>
        </Form.Group>
      </Form>
    );
  }
}

AddItem.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default AddItem;
