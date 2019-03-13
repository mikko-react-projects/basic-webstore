import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Message } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';

class LoginForm extends React.Component {
  state = {
    data: {
      name: "",
      password: ""
    },
    errors: {}
  };

  componentWillReceiveProps(props) {
    this.setState({ errors: props.error });
  }

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
    if(!data.name) errors.name = 'Cant be blank';
    if(!data.password) errors.password = 'Cant be blank';
    return errors;
  }

  render(){
    const { data, errors } = this.state;
    return(
      <Form onSubmit={this.onSubmit}>
        { errors.global && <Message negative> {errors.global} </Message> }
        <Form.Field error={!!errors.name}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="username"
            value={data.name}
            onChange={this.onChange}
          />
          {errors.name && <InlineError text={errors.name} />}
        </Form.Field>

        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Make it secure"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>

        <Button primary>Login</Button>
      </Form>
    )
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm;
